/**
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const GameModel = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "game",
    {
      game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(65),
        allowNull: false,
      },
      place: {
        type: DataTypes.STRING(65),
        allowNull: false,
      },
    },
    {
      freezeTableName: true, // 올바른 옵션 이름
    }
  );
};

module.exports = GameModel;
