'use strict';
const {
  Model
} = require('sequelize');
const bcryptjs = require (`bcryptjs`)

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

  //hooks bcyrptjs

  User.beforeCreate(instance => {
    console.log(instance)
    let salt = bcryptjs.genSaltSync(10)
    let hash = bcryptjs.hashSync(instance.password, salt)

    instance.password = hash

    instance.isAdmin = false,
    instance.isCeo = false
    
  })
  return User;
};