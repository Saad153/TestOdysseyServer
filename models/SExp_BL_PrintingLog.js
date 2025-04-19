const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_BL_PrintingLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    SEBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BL',
        key: 'Id'
      }
    },
    HBLNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MBLNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PrintDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PrintTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SEJobApprovalId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinancialApprovalId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinancialApprovalBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinancialApprovalOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FinancialApprovalLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ReportTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BLTemplateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_BLTemplate',
        key: 'Id'
      }
    },
    PagesId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOfOrigninalCopies: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOfNonNegotiableCopies: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsHideCBM: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsHideWeight: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsHideNetWeight: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OutputId: {
      type: DataTypes.INTEGER,
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
    BLReleaseStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_BL_PrintingLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_BL_PrintingLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
