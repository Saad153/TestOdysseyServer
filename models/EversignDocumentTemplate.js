const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EversignDocumentTemplate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TemplateName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CustomerApplication: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ACHAuthorized: {
      type: DataTypes.BOOLEAN,
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
    },
    EversignId: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    IsSystemGenerated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLOIRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EversignDocumentTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EversignDocumentTemplate",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
