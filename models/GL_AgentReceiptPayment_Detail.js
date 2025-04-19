const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AgentReceiptPayment_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AgentReceiptPaymentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_AgentReceiptPayment',
        key: 'Id'
      }
    },
    AgentInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_AgentInvoice',
        key: 'Id'
      }
    },
    InvDebitCreditId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dCurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    dExchangeRate: {
      type: DataTypes.DECIMAL(18,6),
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
    tableName: 'GL_AgentReceiptPayment_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AgentReceiptPayment_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
