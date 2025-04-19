const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserRegistration', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TenantId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CompanyId: {
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
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Login: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    FullName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Address1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Address2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Address3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LocationId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ZipCodeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsAutoAddrCSZ: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Fax: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Mobile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RegisterDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsRegister: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    SecretQuestion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SecretAnswer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MailingAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DocSignRequestId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DocumentSignRequest',
        key: 'Id'
      }
    },
    IsDeclarationFilling: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsUSImporter: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    SalesPerson: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ZipCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsRead: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CompanyName: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UserRegistration',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UserRegistration",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
