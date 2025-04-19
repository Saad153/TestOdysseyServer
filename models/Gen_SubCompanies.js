const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SubCompanies', {
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
    InvoiceOnMaster: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    StretchLogo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AccountCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SubCompanyPrefix: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ImportRegNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExportRegNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LockedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RegionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Region',
        key: 'Id'
      }
    },
    LocalizationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Localization',
        key: 'Id'
      }
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
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
    },
    DisplayName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    CountryCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_SubCompanies',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SubCompanies",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
