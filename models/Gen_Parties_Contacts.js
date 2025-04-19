const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Parties_Contacts', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ContactName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Designation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Landline: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SkypeID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PersonalEmail: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    HomeContact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CustomertypeId: {
      type: DataTypes.TINYINT,
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
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Parties_Contacts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Parties_Contacts",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
