const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_BL_ProductInfo_Cont', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SIBLProdInfoId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_BL_ProductInfo',
        key: 'Id'
      }
    },
    ContainerNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Quantity: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    QuantityUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UnitValue: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SImp_BL_ProductInfo_Cont',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_BL_ProductInfo_Cont",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
