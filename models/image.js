'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

// ...polymorphics one to many..
// db.Images.hasMany(db.Comments,{
//   foreignKey:"commentableId",
//   constraints: false,
//   scope: {
//     commentableType: 'image'
//   }
// });
// ---- image to tag ----
// db.Images.belongsToMany(db.tags,{
//   through: {
//     model: db.Tag_taggable,
//     unique: false,
//     scope:{
//       taggableType: 'image'
//     }
//   },
//   foreignKey: "taggableId",
//   as: "taggableId",
//   constraints : false
// });
// --- tag to image ---
// db.Images.belongsToMany(db.Images,{
//   through: {
//     model: db.Tag_taggable,
//     unique: false,
//     scope:{
//       taggableType: 'image'
//     }
//   },
//   foreignKey: "tagId",
//   as: "taggableIds",
//   constraints : false
// })
// --- video to tag ---
// db.Images.belongsToMany(db.tags,{
//   through: {
//     model: db.Tag_taggable,
//     unique: false,
//     scope:{
//       taggableType: 'video'
//     }
//   },
//   foreignKey: "taggableId",
//   as: "taggableIdss",
//   constraints : false
// })
// --- tag to video ---
// db.Images.belongsToMany(db.Videos,{
//   through: {
//     model: db.Tag_taggable,
//     unique: false,
//     scope:{
//       taggableType: 'video'
//     }
//   },
//   foreignKey: "tagId",
//   as: "taggableIdsss",
//   constraints : false
// })

    }
  }
  image.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image',
  });
  return image;
};