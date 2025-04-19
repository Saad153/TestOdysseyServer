const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReportSubscription_LogMaster', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReportSubscriptionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ReportSubscription',
        key: 'Id'
      }
    },
    StartOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsReportGenerated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDataGenerated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SuccessfulEMailIds: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UnSuccessfulEMailIds: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReportErrorLog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EMailErrorLog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReportSubscription_LogMaster',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReportSubscription_LogMaster",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
