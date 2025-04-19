const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobReceipt_History_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RevisionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    JobReceiptHistoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobReceipt_History',
        key: 'Id'
      }
    },
    JobReceiptDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    JobInvoiceId: {
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
    AgencyRcvdAmountLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AgencyRcvdAmountFC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PrincipalRcvdAmountLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PrincipalRcvdAmountFC: {
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
    },
    RunningDetentionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    InvoiceSourceId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceCCId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobReceipt_History_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobReceipt_History_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
