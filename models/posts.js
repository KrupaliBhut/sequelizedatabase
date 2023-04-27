'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // db.posts.belongsTo(db.users,{foreignKey:'userId'});
      // db.posts.belongsToMany(db.tags, {through:'post_tags'});
    }
  }
  Posts.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    // references: {
    //   model: 'Users',
    //   key: 'id'
    // },
  
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};