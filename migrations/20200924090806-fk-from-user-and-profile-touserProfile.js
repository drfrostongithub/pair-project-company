'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint("UserProfiles", {
      fields: ["UserId"],
      type: "foreign key",
      name: "custom_fkey_UserId",
      references: { // required
        table: "Users",
        field: "id"
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
      .then(() => {
        return queryInterface.addConstraint("UserProfiles", {
          fields: ["ProfileId"],
          type: "foreign key",
          name: "custom_fkey_ProfileId",
          references: { // required
            table: "Profiles",
            field: "id"
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
        })
      })
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint("UserProfiles", "custom_fkey_ProfileId")
    .then(()=>{
      return queryInterface.removeConstraint("UserProfiles", "custom_fkey_UserId")
    })
  }
};
