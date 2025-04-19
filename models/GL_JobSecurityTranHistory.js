const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobSecurityTranHistory', {
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
    JobSecurityTranId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobSecurityTran',
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
    DepositStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SecurityDepositStatus',
        key: 'Id'
      }
    },
    SettlementAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
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
    DepositeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ChequeNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ChequeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Narration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    IsPostFromSecurity: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SecurityTranStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SecurityTranStatus',
        key: 'Id'
      }
    },
    AddBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TranModeSubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OnAccount: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobSecurityTranHistory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobSecurityTranHistory",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
