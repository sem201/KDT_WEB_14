// models/index를 불러와서 export 한
const models = require("../models/index");
const Visitor = models.Visitor;

// GET /
const main = (req, res) => {
  res.render("index");
};

// GET /visitors
const get_visitors = async (req, res) => {
  // 모델에서 데이터 받아오기

  // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
  // 비동기 처리가 필요하다
  const data = await Visitor.findAll(); // [{}, {}, ...] 배열의 객체 형태로 15번에서 했던것도 똑괕이 출력됨
  console.log(data);
  res.render("visitor", { data });
};

// POST /visitor
const post_visitor = async (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;
  // (기존에 sql 값 ) -> INSER INTO visitor (name, comment) values (?, ?)
  const data = await Visitor.create({
    // id 는 자동 증가임
    name: name,
    comment: comment,
  });
  console.log(data); // dataValues: { id: 1, name: '테스터', comment: '안녕하세요' },
  res.json(data);
};

// GET /visitor or /visitor/:id
const get_visitor = async (req, res) => {
  console.log(req.query);
  console.log(req.params);

  // const data = await Visitor.getVisitor(req.query.id);
  // const data = await Visitor.getVisitor(req.params.id);

  // SELECT * from visitor WHERE id = ? limit 1;
  const data = await Visitor.findOne({ where: { id: req.params.id } });
  console.log("findone:", data); // dataValues: { id: 3, name: '바나나', comment: 'ㅎㅇㅎ' },
  res.json(data);
};

// PATCH /visitor
const patch_visitor = async (req, res) => {
  console.log(req.body);

  // UPDATE visitor SET name = ?, comment = ?, where id = ?
  const data = await Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  console.log("update : ", data); // [1]

  res.json({ result: true });
};

// DELETE /visitor
const delete_visitor = async (req, res) => {
  console.log(req.body);

  // DELTE FROM visitor WHERE id = ?
  const data = await Visitor.destroy({
    where: { id: req.body.id },
  });
  console.log("destroy : ", data); // 1
  res.json({ result: true });
};

module.exports = {
  main,
  get_visitors,
  post_visitor,
  get_visitor,
  patch_visitor,
  delete_visitor,
};
