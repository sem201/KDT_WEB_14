const express = require("express");
const controller = require("../controller/Cmain");
const prac_controller = require("../controller/login");
const router = express.Router();
// [Before]

// router.get("/"),
//   (req, res) => {
//     res.render("index");
//  };
//[After]
// => controller 사용으로 변경
// 경로를 controller와 연결지어 사용 가능
router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comment);

router.get("/loginpage", prac_controller.loginPage);
router.post("/loginpage", prac_controller.login);

// GET /comment/:id
// 라우터 주소에 매개변수 기능 존재함
// (참고) 와일드 카드 역할 하기 때문에 일반 라우터보다 뒤에 위치해야 함 - 일반 라우터를 방해하지 않음
// req.query vs req.params
// req.query : 쿼리 스트링(?key=value&key=value~~)

//module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능함
module.exports = router;
