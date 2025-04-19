const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SeaPublishRate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
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
    CommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Commodity',
        key: 'Id'
      }
    },
    PORCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
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
    POFDCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    ContractNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Service: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EffectiveDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpirationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CostRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SellRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DetentionFreeTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DemurrageFreeTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CombineFreeTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContractType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ConversionTitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TransitTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SeaPublishRate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SeaPublishRate",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
