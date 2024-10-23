/**
 * @param {import('sequelize').Sequeluze} Sequeilze
 * @param {import('sequelize').DataTypes} DataTypes
 */

const PlayerModel = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "player",
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(65),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};

module.exports = PlayerModel;
