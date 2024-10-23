const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// localhost:PORT/ 기본주소
router.get("/", controller.index);

// get/players - 전체 선수 조회
router.get("/players", controller.getPlayers);

// get/players/:player_id - 특정 선수 조회
router.get("/players/:player_id", controller.getPlayer);

// post/players - 선수추가
router.post("/players", controller.postPlayer);

// patch/players/:player_id/team - 특정 선수의 팀 변경
router.patch("/players/:player_id/team", controller.patchPlayer);

// delete /players/:player_id - 특정 선수 삭제
router.delete("/players/:player_id", controller.deletePlayer);

// ~~~ 팀관련 API ~~~
// get /teams - 전체 팀 조회
router.get("/teams", controller.getTeams);

// get/teams/:team_id/players - 특정 팀의 모든 선수 조회
router.get("/teams/:team_id/players", controller.getTeamPlayers);

module.exports = router;
