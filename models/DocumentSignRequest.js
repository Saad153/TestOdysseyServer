const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DocumentSignRequest', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Users',
        key: 'Id'
      }
    },
    EversignTemplateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'EversignDocumentTemplate',
        key: 'Id'
      }
    },
    Subject: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Message: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    IsCopy: {
      type: DataTypes.BOOLEAN,
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
    },
    DocumentHash: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    IsDeclarationFiling: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FileUrl: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SignReqType: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsSigned: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDocAttached: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    RequestDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DocumentSignRequest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DocumentSignRequest",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
