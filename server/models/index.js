'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize.sync()
    .catch(function (err) {
        console.log(err);
    });

let models = [
  'user',
  'disease',
  'image',
  'subdisease'
]

models.forEach(function(model){
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

(function(m){
  m.disease.hasMany(m.image, {foreignKey: {name: 'disease_id', allowNull: false}, onDelete: 'CASCADE'});
  m.image.belongsTo(m.disease, {foreignKey: {name: 'disease_id', allowNull: false}, onDelete: 'CASCADE'});

  m.disease.hasMany(m.subdisease, {foreignKey: {name: 'disease_id', allowNull: false}, onDelete: 'CASCADE'});
  m.subdisease.belongsTo(m.disease, {foreignKey: {name: 'disease_id', allowNull: false}, onDelete: 'CASCADE'});

})(module.exports);
module.exports.sequelize = sequelize;
