const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_PrincipalReceiptPayment_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PrincipalReceiptPaymentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_PrincipalReceiptPayment',
        key: 'Id'
      }
    },
    PrincipalInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_PrincipleInvoice',
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
    tableName: 'GL_PrincipalReceiptPayment_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_PrincipalReceiptPayment_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
