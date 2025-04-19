const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReportConfiguration', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReportFormName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ReportName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormatName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ReportTittle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PageSize: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReportConfiguration',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReportConfiguration",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
