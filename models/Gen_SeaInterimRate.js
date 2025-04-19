const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SeaInterimRate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
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
    ShippingLineName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Commodity',
        key: 'Id'
      }
    },
    CommodityName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PORCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PORName: {
      type: DataTypes.TEXT,
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
    POLName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PODCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PODName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    POFDCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    POFDName: {
      type: DataTypes.TEXT,
      allowNull: true
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
      type: DataTypes.STRING(100),
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
    DemurrageFreeTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DetentionFreeTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CombineFreeTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CostRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: false
    },
    SellRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: false
    },
    BatchId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContractType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ConversionTitle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    InvalidRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TransitTime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsInValid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
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
    tableName: 'Gen_SeaInterimRate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SeaInterimRate",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
