const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReportSubscription_Detail', {
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
    FieldName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FieldValue: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FieldType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ValueGetFrom: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReportSubscription_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReportSubscription_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
