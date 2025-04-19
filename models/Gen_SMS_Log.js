const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SMS_Log', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    FromSMSNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ToSMSNumber: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    SMSSubject: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    SMSBody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SMSSentStatusId: {
      type: DataTypes.INTEGER,
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
    SMSScheduleTime: {
      type: DataTypes.DATE,
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
    tableName: 'Gen_SMS_Log',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SMS_Log",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
