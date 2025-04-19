const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TaxAuthority', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AuthorityName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RegisterNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TaxPercentage: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    WithHeldAcctId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    TaxAuthorityGroupId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TaxPercentagePayable: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TaxPercentagePrincipal: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    AccountPayableId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    AccountPrincipalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    TPGLTaxRateCode: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TPGL_TaxRateCode',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_TaxAuthority',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_TaxA__3214EC071332DBDC",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
