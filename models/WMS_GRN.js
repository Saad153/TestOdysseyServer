const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_GRN', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    GRNNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GRNDate: {
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
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
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
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    LogJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    DEStuffingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_CargoDEStuffing',
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
    },
    ModeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'WMS_GRNMode',
        key: 'Id'
      }
    },
    WareHouseId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    StorageModeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'WMS_StorageMode',
        key: 'Id'
      }
    },
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_Activity',
        key: 'Id'
      }
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsEntryWDim: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    GRNTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalQty: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    TotalWeight: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    TotalVolume: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    TotalBillingVolume: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    StorageManualRate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    FreeDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CustomerRefNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsDisableStorage: {
      type: DataTypes.BOOLEAN,
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
    IsShipemntInvolved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsNoStorageChargesApply: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OverseasAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    HBLNo: {
      type: DataTypes.STRING(25),
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
    VesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PortOfDischargeCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    RateGroup: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_GRN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_GRN__3214EC072727F34C",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
