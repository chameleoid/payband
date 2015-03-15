module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    // Email address  (login)
    email: DataTypes.STRING,

    // Hashed value of passphrase / password
    passphrase: DataTypes.STRING,

    // User's display name
    username: DataTypes.STRING,

    // Stripe ID of card used for billing
    stripeID: DataTypes.STRING,
  });
};
