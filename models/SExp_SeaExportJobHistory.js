const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SeaExportJobHistory', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RevisionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    JobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    JobNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    JobDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    JobNatureId: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    JobStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsMTYMove: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPartFCL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEBookingRequestNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    QuotationNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ShipmentStatusDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShipmentStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreightTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreeHandNominatedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FileNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CustomerRefNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IncoTermsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DistributionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClientCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ClientName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ShipperCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShipperName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ConsigneeCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ConsigneeName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CommodityCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CommodityName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    POLCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    POLName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PODCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PODName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FinalDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FinalDestName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsCustomClearance: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CustomClearanceCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CustomClearanceName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    IsTransportation: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TransporterCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TransporterName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ForwarderCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ForwarderName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SalesRepCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SalesRepName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ShippingLineCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShippingLineName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    LocalAgentCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LocalAgentName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    OverseasAgentCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OverseasAgentName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    PrincipalCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PrincipalName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    VesselCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    VesselName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CutOffDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ETAFinalDestination: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NoOfPackages: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Weight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    WTUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BookingWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalContainer: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BookingVolume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TEUS: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ParentJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ServiceType: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ReceiptDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PortOfReceiptCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PortOfReceiptName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LoadingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PortOfLoadingName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ETADischarge: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PortOfDischargeCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PortOfDischargeName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PortOfFinalDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PortOfFinalDestName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FreightPayableAtCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FreightPayableAtName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CFSFacilityCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CFSFacilityName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TerminalCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TerminalName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ViaPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ViaPortName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DeliveryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreederVesselCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FreederVesselName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FreederVoyage: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsTranshipment: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TranshipmentSIJobNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ETATranshipment: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PortOfTranshipmentCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PortOfTranshipmentName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    POT1ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PortOfTranshipment1Code: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PortOfTranshipment1Name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    POT2ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PortOfTranshipment2Code: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PortOfTranshipment2Name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    POTVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    POTVoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    POT1VesselId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    POT1VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    POTSailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    POT1SailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AgreedToRate: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IsTransshipmentCargo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DocumentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DocumentTypeText: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    OtherInfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CargoManifestRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BuyerCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BuyerName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    BuyingHouseCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BuyingHouseName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    NoOfOriginalBL: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CargoPickUpDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CargoPickUpCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CargoPickUpName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CargoDropOffDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CargoDropOfCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CargoDropOfName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ContainerPickUpCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ContainerPickUpName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ContainerDropOfCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ContainerDropName: {
      type: DataTypes.STRING(200),
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
    }
  }, {
    sequelize,
    tableName: 'SExp_SeaExportJobHistory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_SeaExportJobHistory",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
