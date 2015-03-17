module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Application', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    // Goal title
    title: DataTypes.STRING,

    // Goal description
    description: DataTypes.STRING,

    // Goal value, in cents
    value: DataTypes.INTEGER,
  });
};
