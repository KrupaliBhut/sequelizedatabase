'use strict';
const { faker } = require('@faker-js/faker');
const Posts = [...Array(100)].map((Posts) => (
  {
    
    name: faker.name.fullName(),
    title: faker.lorem.word(),
    content: faker.lorem.sentence(),
    // userId: faker.datatype.uuid(),
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
    return queryInterface.bulkInsert('Posts', Posts, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Posts', null, {});

  }
};
