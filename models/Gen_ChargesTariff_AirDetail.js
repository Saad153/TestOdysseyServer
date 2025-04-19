const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ChargesTariff_AirDetail', {
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
    DG_NonDGTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CommodityGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_CommodityGroup',
        key: 'Id'
      }
    },
    Weight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AirPortOfLoadingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    AirPortOfDischargeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    SellingRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BuyingRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    MinSellingValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    MinBuyingValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MaxSellingValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    MaxBuyingValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RateTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AirLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_ChargesTariff_AirDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ChargesTariff_AirDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
