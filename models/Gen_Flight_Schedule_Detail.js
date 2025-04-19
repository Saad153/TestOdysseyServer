const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Flight_Schedule_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    FlightId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Flight_Schedule',
        key: 'Id'
      }
    },
    FlightDay: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FlightArrivalTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FlightDepartureTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Flight_Schedule_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Flight_Schedule_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
