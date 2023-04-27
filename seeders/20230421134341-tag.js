'use strict';
const { faker } = require('@faker-js/faker');
const Tags = [...Array(100)].map((Tags) => (
  {
    
    name: faker.name.fullName(),
   
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
    return queryInterface.bulkInsert('Tags', Tags, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
