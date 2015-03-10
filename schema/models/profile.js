module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Profile', {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
  });
};

