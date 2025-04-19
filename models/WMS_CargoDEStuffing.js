const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_CargoDEStuffing', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DEStuffingNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEStuffingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    JobNatureId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_JobNature',
        key: 'Id'
      }
    },
    CSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    CAIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    ContainerNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    WareHouseId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    GRNDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalPKGManifested: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalPKGLanded: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalVolume: {
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'WMS_CargoDEStuffing',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Carg__3214EC0700433055",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
