const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SMS_Log_History', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SMSLogId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_SMS_Log',
        key: 'Id'
      }
    },
    SMSSentStatus: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SMSErrorLog: {
      type: DataTypes.TEXT,
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
    AttemptBy: {
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
    tableName: 'Gen_SMS_Log_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SMS_Log_History",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
