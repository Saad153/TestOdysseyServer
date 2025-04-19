const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_DutyCalculation', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LogJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
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
    PortOfOriginCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    SRONumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    IsFreight: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TotalFreight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalFOB: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalCNF: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalInsurance: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    FOBValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Freight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CNFValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ASSValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    InsuranceValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LandingInsPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CDPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AdditionalCDPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RDPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AdditionalSTaxPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SalesTaxPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IncomeTaxPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    WHSurchargePerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SITaxPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    FEDPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsProvision: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ExcisePerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Fine: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ETO: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DO: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DOLOLOCharges: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DOInsurance: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DOEndorsmentCharges: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DOTHC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DOBankCharges: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DOBLSpliting: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DOAgencyCharges: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DOLCLCharges: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OtherSecurity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OtherWharfage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    StampDuty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    FineSection82: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    FineInvoiceNotFound: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Detention: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Demurrage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ItemNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ModelNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Quantity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExciseRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StampDutyRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FineRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LOLORemarks: {
      type: DataTypes.TEXT,
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
    }
  }, {
    sequelize,
    tableName: 'Log_DutyCalculation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_DutyCalculation",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
