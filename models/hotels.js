module.exports = function (sequelize, DataTypes) {
  const Hotels = sequelize.define("Hotels", {
    name: DataTypes.STRING,
    numberOfPieces: DataTypes.INTEGER,
    setNumber: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  });

  Hotels.associate = function (models) {
    Hotels.belongsToMany(models.User, {
      through: "hotels",
      foreignKey: "hotelsid",
    });
  };

  return Hotels;
};
