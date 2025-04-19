const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReportSubscription_Email', {
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
    EmailAddress: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsCC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReportSubscription_Email',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReportSubscription_Email",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
