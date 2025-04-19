const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_PrincipalManualSOA', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_GL_PrincipalManualSOA_TranNumber"
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
    OperationTypeId: {
      type: DataTypes.INTEGER,
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
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceCurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,6),
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
    InvoiceRemarks: {
      type: DataTypes.TEXT,
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
    DebitTotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CreditTotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetTotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DebitDiscountAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CreditDiscountAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetDiscountAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DebitTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CreditTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DebitNetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CreditNetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetNetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DebitNetInclTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CreditNetInclTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetNetInclTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DebitLocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CreditLocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetLocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PrincipalOperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_PrincipalManualSOA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_PrincipalManualSOA_TranNumber",
        unique: true,
        fields: [
          { name: "TranNumber" },
        ]
      },
      {
        name: "PK_GL_PrincipalManualSOA",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
