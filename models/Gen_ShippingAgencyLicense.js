const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ShippingAgencyLicense', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AgencyCode: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    AgencyName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LicensePrefix: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Telephone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    WebSite: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Address1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Address2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Address3: {
      type: DataTypes.STRING(200),
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
    EPASCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SubcompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ShippingAgencyLicense',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ShippingAgencyLicense",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
