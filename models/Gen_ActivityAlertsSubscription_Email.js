const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ActivityAlertsSubscription_Email', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AlertsSubscriptionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ActivityAlertsSubscription',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EmailAddress: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CCEmailAddress: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ActivityAlertsSubscription_Email',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ActivityAlertsSubscription_Email",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
