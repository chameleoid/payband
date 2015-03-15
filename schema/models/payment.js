module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payment', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    // Date payment was received
    date: DataTypes.DATE,

    // Value of payment
    value: DataTypes.INTEGER,

    // Stripe ID of payment
    stripeID: DataTypes.STRING,
  });
};

