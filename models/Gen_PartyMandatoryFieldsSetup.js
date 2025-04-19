const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_PartyMandatoryFieldsSetup', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IsShortName: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsRegistration_Date: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLicenes_No: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsContact_Person: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsEIN: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsMobile: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsE_Mail: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsStrnNo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWebSite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAddress1: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAddress2: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAddress3: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsZipCode: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsFacsimile: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAccountDeptEmail: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSalesRep: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
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
    IsPartyNameUpperCase: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_PartyMandatoryFieldsSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Part__3214EC2778421BDA",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
