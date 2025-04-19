const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_QuoteTemplate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    TransportModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CargoTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IncoTermsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_IncoTerms',
        key: 'Id'
      }
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TemplateName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
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
    }
  }, {
    sequelize,
    tableName: 'Gen_QuoteTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_QuoteTemplate",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
