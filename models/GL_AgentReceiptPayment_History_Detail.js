const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AgentReceiptPayment_History_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AgentReceiptPaymentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RevisionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AgentReceiptPaymentHistoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_AgentReceiptPayment_History',
        key: 'Id'
      }
    },
    AgentReceiptPaymentDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AgentInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    InvDebitCreditId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dCurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dExchangeRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AmountLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AmountFC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dExRateGainLossAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AgentReceiptPayment_History_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AgentReceiptPayment_History_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
