module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    email: DataTypes.STRING,
    passphrase: DataTypes.STRING,

    username: DataTypes.STRING,
    stripeToken: DataTypes.STRING,
  });
};
