const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const User = require("./User")(sequelize, Sequelize.DataTypes);

db.User = User;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// TODO: User 모델 db 객체에 저장

module.exports = db;
