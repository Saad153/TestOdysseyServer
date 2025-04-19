const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ISoftPartyLocation', {
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
    IsDefault: {
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
    LocationName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Email: {
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
    ShortName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Address1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Address2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Address3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Website: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Facsimile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsSalesOffice: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsOperationalOffice: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWareHouse: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsFactory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDocumentation: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsChassisPickupDrop: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsOffDockYard: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsContainerDepot: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPortTerminal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsRampTerminal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AirportId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsAirportOffice: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLfsDrayageVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsChaChb: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTrucker: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TMSLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ISoftPartyLocationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CSULPartyLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_ISoftPartyLocation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ISoftPartyLocation",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
