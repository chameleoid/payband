var Sequelize = require('sequelize');
var db = new Sequelize(process.env.DATABASE_URL);

var User = db.import(__dirname + '/models/user.js');
var Campaign = db.import(__dirname + '/models/campaign.js');
var Payment = db.import(__dirname + '/models/payment.js');

Payment.hasOne(User);
User.hasMany(Payment);
Campaign.hasMany(Payment);

module.exports = db;
