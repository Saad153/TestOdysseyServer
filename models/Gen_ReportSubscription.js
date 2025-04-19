const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReportSubscription', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReportId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TemplateName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OutputOnId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StartProcess: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NextRunProcess: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FromPeriodId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsFromIncrease: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FromDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TillPeriodId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsTillIncrease: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TillDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsActive: {
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
    ReportName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LastRunProcess: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CustomMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmailSubject: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FilterCriteria: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsEmailSendOnBlankData: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    IsGLReport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReportSubscription',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReportSubscription",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
