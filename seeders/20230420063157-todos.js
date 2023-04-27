'use strict';
const { faker } = require('@faker-js/faker');

const Users = [...Array(100)].map((Users) => (
  {
    
    name: faker.name.fullName(),
    // email: faker.lorem.text(),
     email: faker.internet.email(),
     course_name: faker.address.secondaryAddress(),
     status:faker.random.numeric(),
     
    createdAt: new Date(),
    updatedAt: new Date()
  }
))


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', Users, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
