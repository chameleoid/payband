module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Subscription', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    // Start date of billing
    startDate: DataTypes.DATE,

    // Billing interval in days
    billingInterval: DataTypes.INTEGER,

    // Value of subscription, in cents
    value: DataTypes.INTEGER,

    // Stripe ID of payment
    stripeID: DataTypes.STRING,
  });
};
