/**
 * @param {import('sequelize').Sequeluze} Sequeilze
 * @param {import('sequelize').DataTypes} DataTypes
 */

const ProfileModel = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "profile",
    {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      position: {
        type: DataTypes.STRING(65),
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};

module.exports = ProfileModel;
