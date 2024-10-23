/**
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const TeamModel = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "team",
    {
      team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(65),
        allowNull: false,
      },
    },
    {
      freezeTableName: true, // 올바른 옵션 이름
    }
  );
};

module.exports = TeamModel;
