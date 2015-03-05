module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payment', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    date: DataTypes.DATE,
    value: DataTypes.INTEGER,
  });
};

