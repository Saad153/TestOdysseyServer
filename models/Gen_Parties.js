const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Parties', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartyCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PartyName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    Address1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Address2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Address3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CityCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    State: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CountryCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PostalCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Telephone1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Telephone2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Facimile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    WebSite: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    IsUpload: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UploadDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SalesPersonId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    IsBlackList: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EINNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsDisableDocAttchNotf: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    GroupName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AccountsRepId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    AccountsEmail: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    TypeOfOwnerShipId: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AffliatedCompanies: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FedIDNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TypeOfBussiness: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    YearCompanyEstablished: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOfEmployees: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EstAnnualSales: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    DBNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsACHAuthorized: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AuthorizationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AuthorizedBy: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    AccountNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RoutingNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    BankName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsSpecificCCChrgPerc: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CreditCardChargesPerc: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsRatedBooking: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDisablePendingShippingInstructionAlert: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDisablePreShipmentArrivalNotice: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PendingShippingInstructionAlertEmail: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PreShipmentArrivalNoticeEmail: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    IsDisableImportStatusAlert: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDisableOutstandingInvoiceAlert: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCustomerApplicationSigned: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AppDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AppRemarks: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    IsShipper: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsConsignee: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsNotify: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsForwarder: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsIndentor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTransporter: {
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
    Agntnumb: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DateOfTransport: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InsuranceCompany: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PolicyNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PolicyAmount: {
      type: DataTypes.DECIMAL(18,5),
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
    MCNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DOTNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VATNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LogoName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    RulesTariffUrl: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    RegistrationId: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    InActiveDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InActiveReason: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    TPAInActive: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PartyTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TPGLAccountId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsCHACHB: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsExportAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsBuyingHouse: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPotentialCustomer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLocalAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsOverseasAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCommissionAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDeliveryAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsShippingLine: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirLine: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSeaExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSeaImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWarehouse: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLogistic: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWarehouseParty: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsInActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTrucking: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDrayman: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCartage: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DocsRepId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    ParentAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    IsStevedore: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CustomerDueDays: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CustomerCreditLimit: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CustomerExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VendorDueDays: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    VendorCreditLimit: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    VendorExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsManualCreateAccount: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DateOfRegistration: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ParentPartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IsApplyCompanyRestriction: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsApplyCCenterRestriction: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPrincipal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    STRN: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IsDepo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDepoParty: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTerminalParty: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LineCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IsBuyer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsBillingParty: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsImportDomination: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsExportDomination: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ContraAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    IsSlotOperator: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LocalizePartyName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LocalizeAddress1: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    LocalizeAddress2: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    LocalizeAddress3: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    LicenseNoCustomCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CustomerGroupId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_CustomerGroup',
        key: 'Id'
      }
    },
    VendorGroupId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_VendorGroup',
        key: 'Id'
      }
    },
    OverseasAgentNetworkId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_OverseasAgentNetwork',
        key: 'Id'
      }
    },
    IsAllowOBLPDF: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCourierChargesNotApplicable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BranchName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BranchCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SwiftCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IFCSCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MICRCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IntegrateWithContInv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TPGL_AccountCustomerID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TPGL_Account_List',
        key: 'Id'
      }
    },
    TPGL_AccountVendorID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TPGL_Account_List',
        key: 'Id'
      }
    },
    TPGL_TermsId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TPGL_Terms',
        key: 'Id'
      }
    },
    IsOther: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsNonOperationalParty: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CARegistrationId: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TPGL_TermsVendorId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    NTNName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RUTRecep: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CmnaRecep: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IBAN: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Parties',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Parties",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
