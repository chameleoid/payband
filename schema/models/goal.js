module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Application', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    title: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.INTEGER,
  });
};
