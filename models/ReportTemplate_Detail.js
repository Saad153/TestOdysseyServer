const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportTemplate_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReportTemplateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ReportTemplate',
        key: 'Id'
      }
    },
    dReportCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dReportTitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dFormat: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    dFormatRpx: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    dReportType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ReportTemplate_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportTemplate_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
