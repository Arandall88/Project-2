module.exports = function (sequelize, DataTypes) {
  const UserHotels = sequelize.define(
    "UserHotels",
    {
      userId: DataTypes.INTEGER,
      legoId: DataTypes.INTEGER,
    },
    { timestamps: false }
  );

  return UserHotels;
};
