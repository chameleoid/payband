var Sequelize = require('sequelize');
var db = new Sequelize(process.env.DATABASE_URL);

var User = db.import(__dirname + '/models/user.js');

var Campaign = db.import(__dirname + '/models/campaign.js');
var Project = db.import(__dirname + '/models/project.js');

var Goal = db.import(__dirname + '/models/goal.js');

var Payment = db.import(__dirname + '/models/payment.js');
var Subscription = db.import(__dirname + '/models/subscription.js');

Payment.hasOne(User);

Subscription.hasOne(User);
User.hasOne(Subscription);

Campaign.hasMany(Goal);
Project.hasMany(Goal);

User.hasMany(Payment);
Campaign.hasMany(Payment);
Project.hasMany(Payment);

module.exports = db;
