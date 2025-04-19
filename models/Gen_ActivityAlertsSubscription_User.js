const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ActivityAlertsSubscription_User', {
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
    UserId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ActivityAlertsSubscription_User',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ActivityAlertsSubscription_User",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
