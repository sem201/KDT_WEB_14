const express = require("express");
const app = express();
const PORT = 8000;

//ejs 사용 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 미들웨어 설정 : 요청과 응답 사이에서 작업을 하는 코드
// app.use()로 등록

//req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록 (req.body는 POST 메서드에서 사용)

app.use(express.urlencoded({ extended: true })); //post 요청으로 들어오는 모든 형식의 데이터 파싱
app.use(express.json()); // json 형식의 데이터 해석, 주고 받게 해줌

// 라우팅(Routing) - 주소 설정
// ex) GET '/' => index.ejs를 보여줌
app.get("/", (req, res) => {
  console.log(req.query);
  res.render("index_prac");
});

//GET '/login'으로 들어오는 거 처리
// get 방식은 클라이언트에서 보낸 데이터(?key=value&key=value..)가 req.query에 저장
app.get("/login", (req, res) => {
  console.log(req.query);
  // res.send("get 요청 성공");
  // res.render("index"); // (error 한번만 응답 가능하다.)

  res.render("result", { title: "GET 요청", userInfo: req.query });
});

// POST '/login'
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post("/login", (req, res) => {
  console.log(req.body);
  res.render("result", { title: "POST", userInfo: req.body });
});

app.post("/js-form-check", (req, res) => {
  console.log(req.body);
  res.send("js validation 성공");
});

// app.post("/js-form-check");

app.get("/prac1", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/prac2", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.listen(PORT, () => {
  console.log(`${PORT}번으로 서버 시작`);
});
