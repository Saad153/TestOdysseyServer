const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Report_Properties_Value', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RptPropertiesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Report_Properties',
        key: 'Id'
      }
    },
    UserId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Report_Properties_Value',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReportProperties_Value",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
