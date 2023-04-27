'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.addColumn('Users', 'status',{type: Sequelize.INTEGER, default:1, });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('addcolumns');
    return queryInterface.removeColumn('Users','status' , {});
  }
};