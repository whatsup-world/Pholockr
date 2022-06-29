'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Album.associate = function(models) {
    Album.hasMany(models.Image, { foreignKey: 'albumId'});
    Album.belongsTo(models.User, { foreignKey: 'userId'});

  };
  return Album;
};
