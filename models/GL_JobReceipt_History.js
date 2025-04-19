const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobReceipt_History', {
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
    JobReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    HistoryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SettlementAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TranStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChequeNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ChequeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TranModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TranModeSubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsMultiCurrency: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ReceiptCurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DrawnAt: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Narration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AdvanceAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetReceived: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BankChargesAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BankChargesAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExRateGainLossAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExRateGainLossAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsReversal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ReversalId: {
      type: DataTypes.BIGINT,
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
    IsVoid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VoidOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VoidReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VoidBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VoidLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsManualNarration: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TaxPercentage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RoundingFactor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalSecurity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalDetention: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalNormal: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OnAccount: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    crtOperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crtSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crtSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crtSEHBLId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crtSIHBLId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crtSEMBLId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crtSIMBLId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OperationTranNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    crtAEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crtAEHAWBId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crtAEMAWBId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ReceivedFromId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsRefund: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSettleMultipleCCInvoices: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobReceipt_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobReceipt_History",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
