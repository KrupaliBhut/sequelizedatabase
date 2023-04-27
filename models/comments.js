'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // db.Comments.belongsTo(db.Images,{foreignKey:'commentableId',constraints: false});
      // db.Comments.belongsTo(db.Videos,{foreignKey:'commentableId',constraints: false});

    }
  }
  comments.init({
    title: DataTypes.STRING,
    commentableId: DataTypes.INTEGER,
    commentableType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};