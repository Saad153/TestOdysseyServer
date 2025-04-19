const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ChargesTariff_LatePickup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ChargesTariffId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ChargesTariff',
        key: 'Id'
      }
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DaysFrom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysTill: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LatePickupRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ChargesTariff_LatePickup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ChargesTariff_LatePickup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
