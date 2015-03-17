module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Project', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    // Project title / name
    title: DataTypes.STRING,

    // Description of project
    description: DataTypes.STRING,

    // Income goal of billing interval, in cents
    goal: DataTypes.INTEGER,

    // Current value of transactional income per billing interval, in cents
    current: DataTypes.INTEGER,

    // Billing interval (in days)
    interval: DataTypes.INTEGER,
  });
};
