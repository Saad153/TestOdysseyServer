const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Commodity', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CommodityCode: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CommodityName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PrincipleCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CCargoTypeID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_CommodityCargoType',
        key: 'Id'
      }
    },
    IsInActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    HSCode: {
      type: DataTypes.STRING(9),
      allowNull: true,
      references: {
        model: 'Gen_UnCommodity',
        key: 'HsCode'
      }
    },
    IsHazmatProduct: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    HazmatCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    HazmatClassTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_HazmatClassType',
        key: 'Id'
      }
    },
    CommonChemicalName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    HazmatPackingGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_HazmatPackingGroup',
        key: 'Id'
      }
    },
    CommodityGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_CommodityGroup',
        key: 'Id'
      }
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
    },
    UNOCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DCSRONumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DCInsurance: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCLandingIns: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCCD: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCAdditionalSTax: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCSalesTax: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCAdditionalCD: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCIncomeTax: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCSITax: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCFED: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCFine: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCETO: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DCRD: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsShippingItem: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWarehouseItem: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    StandardWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    StandardVolume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ItemCodeERPNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Commodity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Commodity",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
