var Sequelize = require('sequelize');
var db = new Sequelize(process.env.DATABASE_URL);

var User = db.import(__dirname + '/models/user.js');
var Payment = db.import(__dirname + '/models/payment.js');

User.hasMany(Payment);

module.exports = db;
