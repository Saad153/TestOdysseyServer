const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DetentionTariff_PlugIn', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DetentionTariffId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_DetentionTariff',
        key: 'Id'
      }
    },
    TerminalCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
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
    FreeDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MaxDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PlugInRate: {
      type: DataTypes.DECIMAL(18,5),
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_DetentionTariff_PlugIn',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_DetentionTariff_PlugIn",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
