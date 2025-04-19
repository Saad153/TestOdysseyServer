const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ProcessLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    GLVoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GLPDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DocNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GLJobInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice',
        key: 'Id'
      }
    },
    GLJobInvoiceOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GLJobBillId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobBill',
        key: 'Id'
      }
    },
    GLJobReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobReceipt',
        key: 'Id'
      }
    },
    GLJobPaymentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobPayment',
        key: 'Id'
      }
    },
    GLAgentInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_AgentInvoice',
        key: 'Id'
      }
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    GLAgentReceiptPaymentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_AgentReceiptPayment',
        key: 'Id'
      }
    },
    GLPrincipleInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_PrincipleInvoice',
        key: 'Id'
      }
    },
    GLPrincipalReceiptPaymentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_PrincipalReceiptPayment',
        key: 'Id'
      }
    },
    GLJobBillOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GLAgentInvoiceOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GLPrincipleInvoiceOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GLJobDirectId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobDirectExpRev',
        key: 'Id'
      }
    },
    GLJobSecurityTranHistoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobSecurityTranHistory',
        key: 'Id'
      }
    },
    DEPOReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Receipt',
        key: 'Id'
      }
    },
    GLRunningDetentionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_RunningDetention',
        key: 'Id'
      }
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    GLJobSettlementId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobSettlement',
        key: 'Id'
      }
    },
    GenSecurityFileId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_SecurityFile',
        key: 'Id'
      }
    },
    LGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    SalaryAdvanceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_SalaryAdvance',
        key: 'Id'
      }
    },
    LoanId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Loan',
        key: 'Id'
      }
    },
    SalaryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Salaries',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_ProcessLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_ProcessLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
