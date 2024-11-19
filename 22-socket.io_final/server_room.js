const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app); // express app으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8000;

// 사용자 닉네임 모음 객체
const nickObjs = {}; // {socket.id: nick1, socket.id: nick2..}
// 채팅방 정보 저장 배열
const roomList = [];

// 채팅방에 참여한 유저 조회
function getUsersInRoom(room) {
  // 사용자 정보를 저장하는 배열
  const users = [];

  // 지정된 방에 클라이언트(socket id) 목록 가져오기
  const clients = io.sockets.adapter.rooms.get(room);
  console.log(`${room} 채팅방의 클라이언트 목록 조회 :: ${clients}`);

  if (clients) {
    for (const socketId of clients) {
      // 특정 소켓 ID에 해당하는 클라이언트 소켓 정보 가져오기
      const socket = io.sockets.sockets.get(socketId);
      const nickname = socket.user || "알수없음";
      const info = { nickname, key: socketId };
      users.push(info);
    }
  }

  return users;
}

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("room");
});

io.on("connection", (socket) => {
  console.log("서버 연결 완료 :: ", socket.id);

  // 클라이언트 연결 시 채팅방 목록 표시
  io.emit("updateRoom", roomList);

  // 채팅방 만들기
  socket.on("create", ({ roomName, nickname }, cb) => {
    // join(방이름): 해당 방이름이 없다면 생성, 있다면 입장
    // socket.rooms 에 socket.id 값과 방 이름 확인 가능
    socket.join(roomName);

    // 채팅방에 입장한 사용자에게 notice 이벤트 발생
    socket.to(roomName).emit("notice", `${nickname} 님이 입장하였습니다`);

    // socket 정보에 닉네임 추가
    socket.user = nickname;

    // 채팅방 목록 갱신
    if (!roomList.includes(roomName)) {
      roomList.push(roomName);
      io.emit("updateRoom", roomList);
    }

    // 채팅방에 있는 모든 유저를 조회해서 전송
    const usersInRoom = getUsersInRoom(roomName);
    io.to(roomName).emit("userList", usersInRoom);
    cb();
  });

  // [실습3] 채팅창 입장 문구
  // io.emit("notice", `${socket.id} 님이 입장하셨습니다`);

  // [실습3-2] 채팅창 입장 문구 socket.id -> nickname
  socket.on("setNick", (nickname) => {
    // 프론트에서 입력한 닉네임이 nickObjs에 존재하는지 검사
    // 이미 존재; error 이벤트 + '이미 존재하는 닉네임 입니다' => 클라이언트; error 이벤트 받고, alert 띄워줌
    // 새 닉네임; notice 이벤트

    // [퀴즈] 존재하는 닉네임인지 검사, 후 처리
    if (Object.values(nickObjs).indexOf(nickname) != -1) {
      // 이미 존재
      socket.emit("error", "이미 존재하는 닉네임입니다");
    } else {
      nickObjs[socket.id] = nickname;
      io.emit("notice", `${nickname} 님이 입장하셨습니다`);
      socket.emit("entrySuccess", nickname);
      io.emit("updateNicks", nickObjs);
    }
  });

  socket.on("send", ({ dm, nick, msg, room }) => {
    // dm === all 이면 전체 발송
    // 그외 DM 발송
    console.log(dm, nick, msg, room);
    if (dm === "all") {
      io.to(room).emit("showMessage", { nick, msg });
    } else {
      const data = {
        nick,
        msg: msg,
        dm: "(DM) ",
      };
      io.to(dm).emit("showMessage", data);
      socket.emit("showMessage", data); // 내 화면에 볼 메세지
    }
  });

  // 클라이언트 퇴장
  socket.on("disconnect", () => {
    io.emit("notice", `${nickObjs[socket.id]} 님이 퇴장했습니다`);
    delete nickObjs[socket.id];
    io.emit("updateNicks", nickObjs);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
