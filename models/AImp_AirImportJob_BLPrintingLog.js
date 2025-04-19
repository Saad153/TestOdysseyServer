const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AImp_AirImportJob_BLPrintingLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
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
    AIJobApprovalId: {
      type: DataTypes.INTEGER,
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
    tableName: 'AImp_AirImportJob_BLPrintingLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AImp_AirImportJob_BLPrintingLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
