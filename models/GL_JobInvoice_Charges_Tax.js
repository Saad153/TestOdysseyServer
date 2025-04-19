const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobInvoice_Charges_Tax', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobInvoiceChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice_Charges',
        key: 'Id'
      }
    },
    dSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    dSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    SEJobChrgRecvTaxRevId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SIJobChrgRecvTaxRevId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    TaxAuthorityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TaxAuthority',
        key: 'Id'
      }
    },
    RevenueSharePerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RevenueShareAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxPercentage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dAEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    dAIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    AEJobChrgRecvTaxRevId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AIJobChrgRecvTaxRevId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LGJobChrgRecvTaxRevId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dLGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_JobInvoice_Charges_Tax',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobInvoice_Charges_Tax",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
