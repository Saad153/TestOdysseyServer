const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Email_Log', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    FromEmailAccount: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ToEmailAcounts: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CCEmailAcounts: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    EmailSubject: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    EmailBody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmailSentStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EmailFilePath: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SentBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SentOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SentLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmailScheduleTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReferenceType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ReferenceIds: {
      type: DataTypes.STRING(100),
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
    tableName: 'Gen_Email_Log',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Email_Log",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
