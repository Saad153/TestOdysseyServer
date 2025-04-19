const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_PrincipleInvoice', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_GL_PrincipleInvoice_TranNumber"
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InvoiceKindId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DebitCreditId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AutoManualId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PrincipleInvOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    InvoiceDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReferenceNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DueDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceCurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SettlementInvId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    InvoiceRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GLInvoiceId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BankDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_BankDetailRegister',
        key: 'Id'
      }
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DiscountAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
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
    IsManualRemarks: {
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
    NetInclTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PrincipalOperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OpeningInvNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BLNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ApprovalStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsUploadToCtrack: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    UploadToCtrackLog: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_PrincipleInvoice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_PrincipleInvoice_TranNumber",
        unique: true,
        fields: [
          { name: "TranNumber" },
        ]
      },
      {
        name: "PK_GL_PrincipleInvoice",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
