const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobReceipt_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobReceipt',
        key: 'Id'
      }
    },
    JobInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice',
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
      allowNull: true,
      references: {
        model: 'GL_RunningDetention',
        key: 'Id'
      }
    },
    InvoiceSourceId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InvoiceCCId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FileNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobReceipt_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobReceipt_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
