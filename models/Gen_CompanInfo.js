const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CompanInfo', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WebSite: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SalesTaxNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NTNNo: {
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
    ImgLogo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    ImgLetterHead: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StretchLogo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CompanyPrefix: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CompanyTitleLogo: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CompanInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CompanInfo",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
