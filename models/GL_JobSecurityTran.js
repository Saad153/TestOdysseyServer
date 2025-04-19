const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobSecurityTran', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobSecurityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobSecurity',
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
    SecurityTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SecurityType',
        key: 'Id'
      }
    },
    Amount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    DepositStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SecurityDepositStatus',
        key: 'Id'
      }
    },
    ContraAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    ReceiptDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobReceipt_Detail',
        key: 'Id'
      }
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
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
    RefundRequisitionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobSecurityRefundRequisition',
        key: 'Id'
      }
    },
    VoucherTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobSecurityTran',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobSecurityTran",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
