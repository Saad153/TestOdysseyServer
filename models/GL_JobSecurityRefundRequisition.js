const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobSecurityRefundRequisition', {
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
    RequisitionDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RequisitionAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    SecurityAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    InvoiceBalanceAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    ApprovedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApprovedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Instruction: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    POOnAccountOfId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    POOnAccountName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ChequeReceivingDate: {
      type: DataTypes.DATE,
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
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ContainerReturnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InternalComments: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobSecurityRefundRequisition',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobSecurityRefundRequisition",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
