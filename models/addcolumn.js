'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addcolumn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  addcolumn.init({
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return addcolumn;
};