'use strict';
const {
  Model
} = require('sequelize');
//const bcryptjs = require (`bcryptjs`)

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Profile, {through : "UserProfiles"})
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isCeo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  // User.beforeCreate(instance => {
  //   let salt = bcryptjs.genSaltSync(10)
  //   let hash = bcryptjs(instance.password, salt)

  //   instance.password = hash
  // })
  return User;
};