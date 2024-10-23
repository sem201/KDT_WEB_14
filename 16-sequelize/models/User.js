/**
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').Sequelize} DataTypes
 */
const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "newuser",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
