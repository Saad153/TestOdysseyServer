const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_CargoDEStuffing_DetailPD', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    WMSDEStuffingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_CargoDEStuffing',
        key: 'Id'
      }
    },
    WMSDEStuffingDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_CargoDEStuffing_Detail',
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
    RowId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Pcs: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Weight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_CargoDEStuffing_DetailPD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Carg__3214EC071079981E",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
