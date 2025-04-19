const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Parties_Locations', {
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
    LocationCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    LocationName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    Remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    WebSite: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PostalCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CountryCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    CityCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
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
    IsContPickDropLoc: {
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
    },
    IsTerminal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CODECOEDIText: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LPHeader: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    EDOFormatId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_EDOFormat',
        key: 'Id'
      }
    },
    IsEnableEDO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SenderId: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FTPSettingId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_FTPSetting',
        key: 'Id'
      }
    },
    EmailForEdoSubmission: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FirmsCode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EmptyReturnRemarks: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Parties_Locations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Parties_Locations",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
