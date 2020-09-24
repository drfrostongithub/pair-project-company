'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let login = [
      {
        username: "Ceo",
        password: "Ceo",
        isAdmin: true,
        isCeo: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "manager2",
        password: "manager2",
        isAdmin: true,
        isCeo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "manager1",
        password: "manager1",
        isAdmin: true,
        isCeo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "babu2",
        password: "babu2",
        isAdmin: false,
        isCeo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "babu1",
        password: "babu1",
        isAdmin: false,
        isCeo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Users', login, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
