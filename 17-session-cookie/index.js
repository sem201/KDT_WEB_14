const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const userInfo = {
  id: 1234,
  pw: 1234,
};
const sessionConfig = {
  secret: "Secret",
  saveUninitialized: true,
  resave: false,
  secure: false,
  cookie: {
    httpOnly: true,
    maxAge: 300 * 1000,
  },
};

app.use(session(sessionConfig));
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/header", (req, res) => {
  if (req.session.isLogin == "success") {
    res.render("header", {
      text: "성공",
    });
  } else {
    res.render("header", {
      text: "실패",
    });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.id == userInfo.id && req.body.pw == userInfo.pw) {
    req.session.isLogin = "success";
    console.log(req.session);
    res.send(req.session.isLogin);
  } else {
    console.log("실패");
    res.json("아이디 혹은 비밀번호를 다시 확인해주세요");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    console.log("세션삭제 성공");
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log("http://localhost:8000");
});
