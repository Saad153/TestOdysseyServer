const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_BalanceCIH', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PartyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    ChequeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ChequeNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ChequeAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    DrawnBankId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    Remark: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ChequeTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_ChequeType',
        key: 'Id'
      }
    },
    ChequeStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_ChequeStatus',
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
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    LastGLVDId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastGLVDDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GLVCDetId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher_Detail_ChequeInfo',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_BalanceCIH',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_BalanceCIH",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
