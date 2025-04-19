const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_Delivery', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DNNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DNDate: {
      type: DataTypes.DATE,
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
    WareHouseId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    DeliveryModeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'WMS_GRNMode',
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
    CustomerRefNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DNTime: {
      type: DataTypes.TIME,
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
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    VehicleNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SealNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Requestor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeliveredTo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BiltyNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InvoiceNo: {
      type: DataTypes.STRING(50),
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
    DeliveredCity: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
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
    IsShipemntInvolved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_Delivery',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Deli__3214EC074048A6D1",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
