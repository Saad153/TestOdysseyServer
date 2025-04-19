const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_PrincipleInvoice_Charges_Tax', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PrincipleInvoiceChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_PrincipleInvoice_Charges',
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
    JobChrgPrincipalTaxRevId: {
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
    RevExpSharePerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RevExpShareAmount: {
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
    }
  }, {
    sequelize,
    tableName: 'GL_PrincipleInvoice_Charges_Tax',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_PrincipleInvoice_Charges_Tax",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
