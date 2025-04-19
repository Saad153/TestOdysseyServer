const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobPayment_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobPaymentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobPayment',
        key: 'Id'
      }
    },
    JobBillId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobBill',
        key: 'Id'
      }
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
    AgencyPaidAmountLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AgencyPaidAmountFC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PrincipalPaidAmountLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PrincipalPaidAmountFC: {
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
    tableName: 'GL_JobPayment_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobPayment_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
