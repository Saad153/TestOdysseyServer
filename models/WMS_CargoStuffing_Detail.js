const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_CargoStuffing_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    StuffingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_CargoStuffing',
        key: 'Id'
      }
    },
    DeliveryId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GRNDRowId: {
      type: DataTypes.BIGINT,
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
    IsFinalized: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FinalizedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
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
    tableName: 'WMS_CargoStuffing_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Carg__3214EC0778A20E8D",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
