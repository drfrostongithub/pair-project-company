'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      startJoin: {
        type: Sequelize.STRING
      },
      project: {
        type: Sequelize.STRING
      },
      klien: {
        type: Sequelize.STRING
      },
      estimasiProject: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profiles');
  }
};