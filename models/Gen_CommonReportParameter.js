const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CommonReportParameter', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ReportName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Parameter: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ParameterValue: {
      type: DataTypes.STRING(50),
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
    tableName: 'Gen_CommonReportParameter',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CommonReportParameter",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
