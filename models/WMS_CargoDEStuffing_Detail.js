const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_CargoDEStuffing_Detail', {
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
    JobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    SNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DEStuffingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GRNId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PKGLanded: {
      type: DataTypes.DECIMAL(18,5),
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
    GoodDescription: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
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
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
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
    }
  }, {
    sequelize,
    tableName: 'WMS_CargoDEStuffing_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Carg__3214EC0708D87656",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
