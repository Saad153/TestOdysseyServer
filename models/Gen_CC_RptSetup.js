const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CC_RptSetup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
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
    ADDRESS: {
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
    SalesTaxNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReportAddress1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReportAddress2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReportAddress3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReportAddress4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsManualAddress: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CC_RptSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CC_RptSetup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
