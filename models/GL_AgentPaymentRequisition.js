const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AgentPaymentRequisition', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "IX_GL_AgentPaymentRequisition_TranNumber"
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReceiptPaymentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
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
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    TranStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsMultiCurrency: {
      type: DataTypes.BOOLEAN,
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
    NetAmount: {
      type: DataTypes.DECIMAL(18,5),
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
    RoundingFactor: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OperationTranNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SwiftCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MFormNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PayTo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OnAccount: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AgentPaymentRequisition',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_AgentPaymentRequisition_TranNumber",
        unique: true,
        fields: [
          { name: "TranNumber" },
        ]
      },
      {
        name: "PK_GL_AgentPaymentRequisition",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
