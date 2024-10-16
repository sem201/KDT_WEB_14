const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = {
  id: "1234",
  pw: "1234",
};

app.get("/", (req, res) => {
  // res.render("index");
  res.render("index2");
});

app.get("/axios-prac", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios-prac", (req, res) => {
  console.log(req.body);
  console.log(userInfo);
  if (req.body.id == userInfo.id && req.body.pw == userInfo.pw) {
    console.log("true 가 실행됨");
    res.send(true);
  } else {
    console.log("false 가 실행됨");
    res.send(false);
  }
});

app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios get
app.get("/axios", (req, res) => {
  console.log(req.query);
  // res.send(req.query);
  res.json(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`port is opening on ${PORT}`);
});
