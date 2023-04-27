'use strict';

const { posts, tags } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Post_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      //  references:{
      //   model:posts,
      //   key : 'id',
      //   as: 'PostId'
      //  }
      },
      tagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references:{
        //   model: "tags",
        //   key : 'id',
        //   as: 'PostId'
        //  }
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Post_tags');
  }
};