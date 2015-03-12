module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Project', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },

    title: DataTypes.STRING,
    description: DataTypes.STRING,

    goal: DataTypes.INTEGER,
    current: DataTypes.INTEGER,
  });
};
