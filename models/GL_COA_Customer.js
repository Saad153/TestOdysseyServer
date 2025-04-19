const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COA_Customer', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    COAAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    CustCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CustName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CustPhoneNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CustFaxNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CustMobile: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CustEmail: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CustAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustSTax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CustNTNNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DiscPerc: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    CredDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CredLimt: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    ParentCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContactType: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CountryCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CityCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ContactWeb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SmanCode: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TransporterName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COA_Customer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_COA_Customer",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
