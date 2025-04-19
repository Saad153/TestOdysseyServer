const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportTemplate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReportCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ReportTitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Format: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
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
    FormatRpx: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    ReportType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ReportTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_ReportTemplates",
        unique: true,
        fields: [
          { name: "ReportCode" },
        ]
      },
      {
        name: "PK_ReportTemplates",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
