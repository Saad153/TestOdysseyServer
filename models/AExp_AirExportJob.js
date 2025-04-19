const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AExp_AirExportJob', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_AEXP_AirExportJob_JobNumber"
    },
    JobDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    JobNatureId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ConsoleOfId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ParentJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    JobKindId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
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
    AirLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    LocalVendorId: {
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
    FinalDestinationCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
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
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    SalesRepId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    DepartureDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReceivablePPTotal: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ReceivableCCTotal: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PayablePPTotal: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PayableCCTotal: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    InvoiceStatus: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ProfitAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ReceivableAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PayableAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(100),
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
    ShipmentStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShipmentStatusDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CarrierBookingNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    JobStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    JobCancelReasonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_JobCancelReason',
        key: 'Id'
      }
    },
    QuotaionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Quotation',
        key: 'Id'
      }
    },
    DGNonDGId: {
      type: DataTypes.INTEGER,
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
    OtherInfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsCustomClearance: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CustomClearanceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IsTransportation: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TransporterId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IsTransshipmentCargo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DocumentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_DocumentType',
        key: 'Id'
      }
    },
    DocumentTypeText: {
      type: DataTypes.STRING(200),
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
    PortOfFinalDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true
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
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    CustomerRefNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    JobClosingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    JobClosingReasonId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobClosingRemarks: {
      type: DataTypes.STRING(100),
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
    ManifestHeaderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ManifestHeader',
        key: 'Id'
      }
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PEDIProcessedId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TariffAppliedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TariffAppliedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TariffAppliedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsTariffApplied: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SplittedJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
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
    FreightTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreeHandNominatedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CargoTypeFileId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_CargoTypeFile',
        key: 'Id'
      }
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
    ActualWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ChargeableWeightClient: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ChargeableWeightLine: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    VolumeWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    FlightNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FlightScheduleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Flight_Schedule',
        key: 'Id'
      }
    },
    DepartureTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AirPortOfLoadingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    AirPortOfTranshipmentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    AirPortOfDischargeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    CargoDropOffLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    CargoPickUpLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    TactRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TactSheetRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TactAllInFreightRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AEAWBStockDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirwayBillStock_Detail',
        key: 'Id'
      }
    },
    FileNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ArrivalTime: {
      type: DataTypes.DATE,
      allowNull: true
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
    BuyerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    LoadingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DischargeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TranshipmentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AWBReleaseStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AWBHandoverId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    APOTAirLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    APOTFlightNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    APOTDepartureDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    APOTDepartureTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AirPortOfTranshipment1Id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    APOT1ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    APOT1AirLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    APOT1FlightNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    APOT1DepartureDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    APOT1DepartureTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AirPortOfTranshipment2Id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    APOT2ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExRateEditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExRateEditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExRateEditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CargoPickUpDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CargoPickUpTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CargoDropOffDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CargoDropOffTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsEditExRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    JobCancelReason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AEBookingRequestId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BookingRequest',
        key: 'Id'
      }
    },
    SequenceNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TotalCBM_TEUS: {
      type: DataTypes.DECIMAL(18,5),
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
    AgentInstruction: {
      type: DataTypes.TEXT,
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
    ExRateSelling: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    ExRateBuying: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
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
    TMSId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TMSLastUpdateOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReceiptDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DimentionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Dimension',
        key: 'Id'
      }
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
    tableName: 'AExp_AirExportJob',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_AEXP_AirExportJob_JobNumber",
        unique: true,
        fields: [
          { name: "JobNumber" },
        ]
      },
      {
        name: "PK_AExp_AirExportJob",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
