var Sequelize = require('sequelize');
var db = new Sequelize(process.env.DATABASE_URL);

db.import(__dirname + '/models/user.js');

module.exports = db;
