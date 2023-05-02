'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize,DataTypes} = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
// const cors = require('cors');
// app.use(cors());
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require('../models/users')(sequelize,DataTypes);

db.posts = require('../models/posts')(sequelize,DataTypes);
db.tags = require('../models/tags')(sequelize,DataTypes);
db.post_tags = require('../models/post_tag')(sequelize,DataTypes);
db.Videos = require('../models/video')(sequelize,DataTypes);
db.Images = require('../models/image')(sequelize,DataTypes);
db.Comments = require('../models/comments')(sequelize,DataTypes);
db.Tag_taggable = require('../models/tag_taggable')(sequelize,DataTypes);

db.users.hasOne(db.employee, {foreignKey:'userId'});
db.users.hasMany(db.employee,{foreignKey:'userId'});
db.employee.belongsTo(db.users,{foreignKey:'userId'});

db.users.addScope('checkstatus',{
  where :{
    status :1 
  }
})
db.users.addScope('includeposts',{
  include : {
    model: db.posts,
    attributes:  ["title","content"]
    }
})
// one to many 
db.users.hasMany(db.posts,{foreignKey:'userId'});
db.posts.belongsTo(db.users,{foreignKey:'userId'});
// many to many 
db.posts.belongsToMany(db.tags, {through:'post_tags'});
db.tags.belongsToMany(db.posts,{through:'post_tags'});
db.users.belongsToMany(db.post_tags, { through: 'post_tags'});
// ...polymorphics one to many..
db.Images.hasMany(db.Comments,{
  foreignKey:"commentableId",
  constraints: false,
  scope: {
    commentableType: 'image'
  }
});

db.Videos.hasMany(db.Comments,{
  foreignKey:"commentableId",
  constraints: false,
  scope: {
    commentableType: 'video'
  }
});

db.Comments.belongsTo(db.Images,{foreignKey:'commentableId',constraints: false});
db.Comments.belongsTo(db.Videos,{foreignKey:'commentableId',constraints: false});

// ---- image to tag ----
db.Images.belongsToMany(db.tags,{
  through: {
    model: db.Tag_taggable,
    unique: false,
    scope:{
      taggableType: 'image'
    }

  },
  foreignKey: "taggableId",
  as: "taggableId",
  constraints : false
})
// --- tag to image ---
db.Images.belongsToMany(db.Images,{
  through: {
    model: db.Tag_taggable,
    unique: false,
    scope:{
      taggableType: 'image'
    }
  },
  foreignKey: "tagId",
  as: "taggableIds",
  constraints : false
})
// --- video to tag ---
db.Images.belongsToMany(db.tags,{
  through: {
    model: db.Tag_taggable,
    unique: false,
    scope:{
      taggableType: 'video'
    }
  },
  foreignKey: "taggableId",
  as: "taggableIdss",
  constraints : false
})
// --- tag to video ---
db.Images.belongsToMany(db.Videos,{
  through: {
    model: db.Tag_taggable,
    unique: false,
    scope:{
      taggableType: 'video'
    }
  },
  foreignKey: "tagId",
  as: "taggableIdsss",
  constraints : false
})
db.sequelize.sync({force:false
})
.then(()=>{
    console.log('table created ');
}).catch((error)=>{
    console.log('unable to creating table');
})

module.exports = db;
