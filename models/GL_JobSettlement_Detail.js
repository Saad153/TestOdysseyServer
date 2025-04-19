const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobSettlement_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobSettlementId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobSettlement',
        key: 'Id'
      }
    },
    SettlementTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice',
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
    JobReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobReceipt',
        key: 'Id'
      }
    },
    JobPaymentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobPayment',
        key: 'Id'
      }
    },
    JobInvOpeningAdvId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoiceOpening_Advance',
        key: 'Id'
      }
    },
    JobBillOpeningAdvId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobBillOpening_Advance',
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
    AgencyAmountLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AgencyAmountFC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PrincipalAmountLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PrincipalAmountFC: {
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
    JobReceiptSInsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_SettlementInstrument',
        key: 'Id'
      }
    },
    JobPaymentSInsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_SettlementInstrument',
        key: 'Id'
      }
    },
    UnSettleJobInvId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice',
        key: 'Id'
      }
    },
    UnSettleJobBillId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobBill',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_JobSettlement_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobSettlement_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
