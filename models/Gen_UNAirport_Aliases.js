const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_UNAirport_Aliases', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AirportId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    Aliases: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_UNAirport_Aliases',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_UNAirport_Aliases",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
