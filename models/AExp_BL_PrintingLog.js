const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AExp_BL_PrintingLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    AEBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_BL',
        key: 'Id'
      }
    },
    HAWBNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MAWBNo: {
      type: DataTypes.STRING(25),
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
    AEJobApprovalId: {
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
    }
  }, {
    sequelize,
    tableName: 'AExp_BL_PrintingLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AExp_BL_PrintingLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
