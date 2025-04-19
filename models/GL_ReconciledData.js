const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ReconciledData', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    BankId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
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
    StatementDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StatementBalance: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    UnReconciledAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    UnReconciledBRVCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UnReconciledBPVCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UnReconciledBRVAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    UnReconciledBPVAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Invalid: {
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
    BookBalance: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    DiffAmt: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    IsReconciled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_ReconciledData',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_ReconciledData",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
