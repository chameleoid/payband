var Sequelize = require('sequelize');
var db = new Sequelize(process.env.DATABASE_URL);

var User = db.import(__dirname + '/models/user.js');
var Campaign = db.import(__dirname + '/models/campaign.js');
var Project = db.import(__dirname + '/models/project.js');
var Payment = db.import(__dirname + '/models/payment.js');
var Goal = db.import(__dirname + '/models/goal.js');

Payment.hasOne(User);

User.hasMany(Payment);
Campaign.hasMany(Payment);
Project.hasMany(Payment);

Campaign.hasMany(Goal);
Project.hasMany(Goal);

module.exports = db;
