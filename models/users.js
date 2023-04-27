'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // db.users.hasMany(db.posts,{foreignKey:'userId'});
      // db.users.belongsToMany(db.post_tags, { through: 'post_tags'});
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    course_name: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Users',
    // paranoid: true,
    paranoid: true,
    timestamps: true
   
  });
  return Users;
};