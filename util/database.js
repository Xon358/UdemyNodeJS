const Sequelize = require('sequelize');

const sequelize = new Sequelize('udemy_node', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  port: '8001'
});

module.exports = sequelize;
