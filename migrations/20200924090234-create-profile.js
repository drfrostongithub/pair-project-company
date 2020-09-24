'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Profiles', {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Profiles');
  }
};