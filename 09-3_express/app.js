const express = require("express");
const app = express();
const PORT = 8000;

// express 에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set("view engine", "ejs");
// 템플릿 엔진 파일을 저장할 위치 등록 (default 폴더명은 views)
app.set("views", "./views");

// static 미들웨어 등록(정적 파일 로드 ex. css, js, img 등)
// static 이라는 실제 폴더를 public이라는 이름으로 접근하겠다.
app.use("/public", express.static(__dirname + "/static")); // 위에서처럼 그냥 상대 경로로 해도 된다. (이번에는 __dirname을 이용하여 절대 경로로 넣은것!)
console.log(__dirname); // C:\Users\sungjae\Desktop\Workspace\codingOn\github\KDT_WEB_14\09-3_express 실행파일 경로

// app.get(경로, 해당 결로로 들어왔을 떄 실행할 함수)
// 요청 메서드 : get
// 요청 주소 : "/" -> "서버주소:포트 번호/" > "http://localhost:8000/"
app.get("/", function (req, res) {
  // res.send(응답 내용)
  // res.send("hello express!");

  //inde.ejs 라는 파일을 렌더링
  res.render("index", {
    btns: ["사과", "오렌지", "키위"],
    isLogin: true,
    me: {
      name: "luna",
      msg: "반갑습니다~",
    },
  });
});

// login경로로 요청이 들어오면 로그인 페이지 응답
app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(PORT, function () {
  console.log(`server listenting on ${PORT}! http://localhost:${PORT}`);
});
