const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SeaExportJob', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_SEXP_SeaExportJob_JobNumber"
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
        model: 'SExp_SeaExportJob',
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
    ShippingLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    LocalAgentId: {
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
    Weight: {
      type: DataTypes.DECIMAL(18,5),
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
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    ExchRateClient: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExchRateLine: {
      type: DataTypes.DECIMAL(18,5),
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
    TEUS: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DeliveryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_DeliveryType',
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
    TotalContainer: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    FreightPayableAtCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
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
    AccountManifestRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
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
    CargoManifestRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsPartFCL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CargoPickUpDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CargoDropOffDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CutOffDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AgreedToRate: {
      type: DataTypes.STRING(20),
      allowNull: true
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
      allowNull: true
    },
    CargoTypeId: {
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
    Version: {
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
    ITNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ITNumberLocDate: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CPRSNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CPRSNumberLocDate: {
      type: DataTypes.STRING(25),
      allowNull: true
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
    PortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortOfTranshipmentCode: {
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
    ETATranshipment: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ETADischarge: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ETAFinalDestination: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MotherVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    MotherVoyage: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ServiceType: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    IsTranshipment: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TranshipmentModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TranshipmentSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    AESDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ERecDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ERLSDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DoorMoveOnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SICUTOFFDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VGMCUTOFFDateTime: {
      type: DataTypes.DATE,
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
    PlannedETD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PlannedETA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContainerPickUpLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    ContainerDropOffLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    CustomerRefNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ContainerPickUpLocRefNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ContainerDropOffLocRefNo: {
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
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    FreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreeDaysPlugIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ManifestHeaderId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PEDIProcessedId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TariffAppliedId: {
      type: DataTypes.INTEGER,
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
    FreeDaysDemurrage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsManualFreeDays: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SplittedJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
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
    BookingWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    QuotationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Quotation',
        key: 'Id'
      }
    },
    FileNumber: {
      type: DataTypes.STRING(25),
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
    BLReleaseStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BLHandoverId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsMTYMove: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    POTVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    POTVoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    POTSailingDate: {
      type: DataTypes.DATE,
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
    POT1ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    POT1VesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    POT1VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    POT1SailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PortOfTranshipment2Code: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    POT2ArrivalDate: {
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
    IsEditExRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    JobCancelReason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsSharePrincipalCharges: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SEBookingRequestId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BookingRequest',
        key: 'Id'
      }
    },
    BookingVolume: {
      type: DataTypes.DECIMAL(18,5),
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
    SequenceNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TotalCBM_TEUS: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ContainerString: {
      type: DataTypes.TEXT,
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
    CFSFacilityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    WTUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsManualVolume: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BuyingHouseId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    AgentInstruction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DistributionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_TaxRevDistribution',
        key: 'Id'
      }
    },
    ReleaseOrStop: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    AgentM3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ColoadM3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
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
    LoadingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReceiptDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NoOfOriginalBL: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AnyOtherInfo: {
      type: DataTypes.TEXT,
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
    tableName: 'SExp_SeaExportJob',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_SEXP_SeaExportJob_JobNumber",
        unique: true,
        fields: [
          { name: "JobNumber" },
        ]
      },
      {
        name: "PK_SExp_SeaExportJob",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
