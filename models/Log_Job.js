const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_Job', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobNumber: {
      type: DataTypes.STRING(13),
      allowNull: true,
      unique: "IX_Log_Job_JobNumber"
    },
    JobDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    JobRefNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ProjectRefNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ClientRefNo: {
      type: DataTypes.STRING(80),
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
    TransporterId: {
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
    MBLNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DeliveryDetailId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ImportExportId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobProcessId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContianerTypeId: {
      type: DataTypes.INTEGER,
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
    AirLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    VoyageOrFlightNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SailingDate: {
      type: DataTypes.DATE,
      allowNull: true
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
    ClearingAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ForwarderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ShippingLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ShippingAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    POLCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PODCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PickupLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    PickupLocationAddress: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    DeliveryLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    DeliveryLocationAddress: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CrossDockingLocId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CrossDockingLocAdd: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    FreeDaysAllowed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IGMorEGM: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    IndexNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MarksAndNo: {
      type: DataTypes.STRING(7000),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(7000),
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
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    JobStageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Log_JobStage',
        key: 'Id'
      }
    },
    CargoTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SecurityPaidById: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SalesRepId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    OperatorId: {
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
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    JobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Log_JobType',
        key: 'Id'
      }
    },
    GoodsDescription: {
      type: DataTypes.STRING(7000),
      allowNull: true
    },
    DODate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GPDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeliveryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContainerString: {
      type: DataTypes.STRING(7500),
      allowNull: true
    },
    POFDCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    MachineNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    IGMDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShippBillNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShippBillDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CashDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LCNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmptyReturnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CInvNumber: {
      type: DataTypes.STRING(80),
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
    FreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreeDaysDemurrage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsManualGrossWeight: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    GrossWeight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    FormENumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FormEDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CustomFileNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VIRNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IsOpening: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    ApprovedStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedStatusBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedStatusOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApprovedStatusLog: {
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
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    JobCancelReason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
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
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
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
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    NoOfPackages: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CarrierBookingNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DriverNICNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DriverName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DriverMobileNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VehicleNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IncoTermsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_IncoTerms',
        key: 'Id'
      }
    },
    JobClosingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    JobClosingReasonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_JobCancelReason',
        key: 'Id'
      }
    },
    JobClosingRemarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    PickupDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PickupTimeFrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PickupTimeTill: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeliveryTimeFrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeliveryTimeTill: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TaxDistributionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_TaxRevDistribution',
        key: 'Id'
      }
    },
    isClosed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ClosedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClosedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ClosedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    OverSeasAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    QuotationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Quotation',
        key: 'Id'
      }
    },
    AssessedValue: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    CashNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CommInvValue: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    SeqNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Suffix: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log_Job',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Log_Job_JobNumber",
        unique: true,
        fields: [
          { name: "JobNumber" },
        ]
      },
      {
        name: "PK_Log_Job",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
