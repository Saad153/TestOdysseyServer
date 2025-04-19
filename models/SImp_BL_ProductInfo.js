const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_BL_ProductInfo', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SIBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_BL',
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
    }
  }, {
    sequelize,
    tableName: 'SImp_BL_ProductInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_BL_ProductInfo",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
