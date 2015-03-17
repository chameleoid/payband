module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Campaign', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    // Campaign title
    title: DataTypes.STRING,

    // Campaign description
    description: DataTypes.STRING,

    // Campaign goal, in cents
    goal: DataTypes.INTEGER,

    // Current cache'd sum of payments in campaign, in cents
    current: DataTypes.INTEGER,

    // Start date of campaign
    startdate: DataTypes.DATE,

    // End date of campaign
    enddate: DataTypes.DATE,
  });
};
