const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobPayment_History_Detail', {
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
    JobPaymentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    JobPaymentHistoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobPayment_History',
        key: 'Id'
      }
    },
    JobPaymentDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    JobBillId: {
      type: DataTypes.BIGINT,
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
    tableName: 'GL_JobPayment_History_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobPayment_History_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
