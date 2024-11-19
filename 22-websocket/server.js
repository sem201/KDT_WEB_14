const ws = require("ws");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//express 서버와 웹 소켓 버서를 연결(같은 포트를 공유)
const wsServer = new ws.Server({ server: server });

const sockets = [];

wsServer.on("connection", (socket) => {
  console.log("[클라이언트 연결 완료]");

  sockets.push(socket); // 배열에 접속한 클라이언트 객체 추가

  // 클라이언트의 메세지 수신

  //웹 소켓 서버에 접속한 모든 클라이언트 (브라우저 탭)에게 메세지 전송
  //  브로드 캐스팅(여러 컴퓨터한테 데이터 전송)
  socket.on("message", (message) => {
    console.log(`클라이언트로부터 받은 메세지 :: ${message}`);

    sockets.forEach((socket) => {
      socket.send(`${message}`);
    });
  });

  socket.on("error", (error) => {
    console.log("에러발생");
  });

  socket.on("close", () => {
    console.log("[클라이언트 연결 종료]");
  });
});
