const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDIProcessed', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    HBLNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MBLNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    HBLDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MBLDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ediClientName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediShipperName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediConsigneeName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediOverseasAgentName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediNotifyParty1Name: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediNotifyParty2Name: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediCommodityName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ClientId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ShipperId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ConsigneeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    OverseasAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    NotifyParty1Id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    NotifyParty2Id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    CommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Commodity',
        key: 'Id'
      }
    },
    ediPortOfReceiptCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ediPortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ediPortOfDischargeCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ediPortOfFinalDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PortOfReceiptCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortOfDischargeCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortOfFinalDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ediGrossWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ediNetWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ediWeightUnit: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ediVolume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ediNoOfPackages: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ediPackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    GrossWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    WeightUnit: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NoOfPackages: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PackagesCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ediVesselName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ediVoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ediSailingDate: {
      type: DataTypes.DATE,
      allowNull: true
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
    ediCarrierBookingNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CarrierBookingNo: {
      type: DataTypes.STRING(15),
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
    TranNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ProcessDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AutoManualId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EDIFileName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    EDIFileDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EDIFileTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EDIImportExportId: {
      type: DataTypes.INTEGER,
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
    EDIStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    POFDFreeDays: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    POLFreeDays: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    MethodId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IndexTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TransferStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SalesmanId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    ediPrincipalName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    EDISourceId: {
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
    JobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PEDIFileTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HSCode: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    ediPortOfTranshipment1Code: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ediPortOfTranshipment2Code: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PortOfTranshipment1Code: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortOfTranshipment2Code: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ThruBasisId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PortOfTranshipment1AgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    PortOfTranshipment2AgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ediPortOfTranshipment1Agent: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ediPortOfTranshipment2Agent: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ediForwarderName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ForwarderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IndexNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ViaPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    TypeOfBLId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EDIRateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IsManualFreeDays: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreeDaysDemurrage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreeDaysPlugIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DeliveryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDIProcessed',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EDIProcessed",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
