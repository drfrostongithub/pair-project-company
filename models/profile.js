'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsToMany(models.User, {through : "UserProfiles"})
    }
  };
  Profile.init({
    fullName: DataTypes.STRING,
    position: DataTypes.STRING,
    salary: DataTypes.STRING,
    startJoin: DataTypes.STRING,
    project: DataTypes.STRING,
    klien: DataTypes.STRING,
    estimasiProject: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};