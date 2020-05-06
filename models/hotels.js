module.exports = function (sequelize, DataTypes) {
  const Hotels = sequelize.define("Hotels", {
    name: DataTypes.STRING,
    imageURL: DataTypes.STRING,
  });

  Hotels.associate = function (models) {
    Hotels.belongsToMany(models.User, {
      through: "hotels",
      foreignKey: "hotelsId",
    });
  };

  return Hotels;
};
