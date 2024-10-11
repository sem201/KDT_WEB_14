// http 모듈로 웹 서버 생성
const http = require("http"); // http 는 따로 모듈을 생성하지 않았었지만, 노드 js에 기본적으로 제공하는 모듈임 ㅇㅇ

// fs 모듈 사용 (file system)
const fs = require("fs"); // fs(파일시스템) 모듈 불러오기

const server = http.createServer(function (req, res) {
  // req : request 객체 (클라이언트에서 서버로 들어온 요청)
  // res : response 객체 (서버에서 클라이언트로 보내는 응답)
  // 응답 head , 본문, end를 지정
  // res.writeHead(200); // 응답 head
  // res.write("<h1>Hello, Node.js!</h1>"); // 응답 본문
  // res.end("<p>My first node server</p>"); // 응답 종료

  // localhost:8000 접속시 일어남

  // 예외 처리!! -> try - catch 문 이용
  try {
    const data = fs.readFileSync("./inde.html");
    res.writeHead(200, { "content-type": "text/html;charset=UTF-8" });
    res.write(data);
    res.end();
  } catch (error) {
    // 실습 : 404.html 파일 만들어서 해당 html 파일 응답으로 보내기
    console.log(error);
    const error_page = fs.readFileSync("./not_found_404.html");
    res.writeHead(404);
    res.write(error_page);
    res.end();
  }
});
const PORT = 8000;

// request 이벤트 : 클라이언트 요청
server.on("request", function (req, res) {
  console.log("reqest 이벤트 발생!", req.url);
});

// connection 이벤트 : 클라이언트가 접속했을 때 발생
server.on("connection", function (req, res) {
  console.log("connection 이벤트 발생!");
});

server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});

// 5초 후에 서버 종료
// setTimeout(function () {
//   console.log("5초가 지나서 서버 종료");
//   server.close();
// }, 5000);
