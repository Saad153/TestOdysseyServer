const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDO_TemplateSetup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    isAttach: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EmailTemplate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_EmailTemplate',
        key: 'Id'
      }
    },
    ReportTemplate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ReportTemplate_Detail',
        key: 'Id'
      }
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDO_TemplateSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EDO_TemplateSetup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
