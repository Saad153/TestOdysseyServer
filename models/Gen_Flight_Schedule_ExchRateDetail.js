const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Flight_Schedule_ExchRateDetail', {
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
    SerialNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    SellingExchageRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BuyingExchageRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Flight_Schedule_ExchRateDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Flight_Schedule_ExchRateDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
