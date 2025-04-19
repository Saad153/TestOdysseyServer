const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ISoftPartyContact', {
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
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    },
    IsPrimary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAutoAddrCSZ: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LocationId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LocationFullName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ZipCodeId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ZipCode: {
      type: DataTypes.STRING(50),
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
    Mobile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountsEmail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Longitude: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    DescriptiveHours: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ISoftPartyContactId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ISoftPartyContact',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ISoftPartyContact",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
