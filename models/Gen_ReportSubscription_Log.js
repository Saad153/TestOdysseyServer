const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReportSubscription_Log', {
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
    MethodName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LogMasterId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReportSubscription_Log',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReportSubscription_Log",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
