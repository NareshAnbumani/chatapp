"use strict";
const bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        firstname: "Naresh",
        lastname: "Anbumani",
        email: "nareshanbumani819@gmail.com",
        password: bcrypt.hashSync("Sand@2012",10),
        gender: "male",
      },
      {
        firstname: "Sam",
        lastname: "Smith",
        email: "sam.smith@gmail.com",
        password: "Sand@2012",
        gender: "male",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
        email: "jane.doe@gmail.com",
        password: "Sand@2012",
        gender: "female",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users');
  },
};
