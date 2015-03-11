module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Campaign', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    title: DataTypes.STRING,
    description: DataTypes.STRING,

    goal: DataTypes.INTEGER,
    current: DataTypes.INTEGER,

    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
  });
};
