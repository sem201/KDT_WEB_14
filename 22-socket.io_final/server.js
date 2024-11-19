const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app); // express app으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8000;

// 사용자 닉네임 모음 객체
const nickObjs = {}; // {socket.id: nick1, socket.id: nick2..}

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("chat");
});

io.on("connection", (socket) => {
  console.log("서버 연결 완료 :: ", socket.id);

  // [실습1]
  socket.on("hello", (data, callback) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("helloKr", { who: "hello", msg: "안녕!" });
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

  socket.on("send", ({ dm, myNick, msg }) => {
    // dm === all 이면 전체 발송
    // 그외 DM 발송
    if (dm === "all") {
      io.emit("showMessage", { nick: myNick, msg });
    } else {
      const data = {
        nick: myNick,
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
