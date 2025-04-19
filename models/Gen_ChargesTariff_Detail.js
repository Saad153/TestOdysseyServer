const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ChargesTariff_Detail', {
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
    CY_CFSTypeId: {
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
    EquipCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    POLCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PODCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
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
    Version: {
      type: DataTypes.INTEGER,
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
    RateTypeId: {
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
    Margin: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ShippingLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    PercentageOfFreight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IndexTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_IndexType',
        key: 'Id'
      }
    },
    ConsigneeCity: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_ChargesTariff_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ChargesTariff_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
