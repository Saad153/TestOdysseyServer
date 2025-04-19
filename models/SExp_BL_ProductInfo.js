const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_BL_ProductInfo', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BL',
        key: 'Id'
      }
    },
    QuantityValue: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    UnitValue: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    QuantityUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CountryOfOriginCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    SerialTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SerialCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SerialExceptionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Car_Make: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Car_Model: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Car_ChasisNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Car_EngineNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DENumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    InvoiceNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PONo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Style: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FOBDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TBPackingList: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Division: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_BL_ProductInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_BL_ProductInfo",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
