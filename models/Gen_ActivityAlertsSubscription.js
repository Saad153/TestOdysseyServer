const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ActivityAlertsSubscription', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ActivityAlertId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ActivityAlerts',
        key: 'Id'
      }
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    EntryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsInActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    UserTemplate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmailTemplate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SMSTemplate: {
      type: DataTypes.TEXT,
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
    tableName: 'Gen_ActivityAlertsSubscription',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ActivityAlertsSubscription",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
