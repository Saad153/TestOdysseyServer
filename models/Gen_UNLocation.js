const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_UNLocation', {
    UNLocCode: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    UNLocName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsCountry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCity: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSeaPort: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirPort: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTerminal: {
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
    IsMasterPort: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CY: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CFS: {
      type: DataTypes.BOOLEAN,
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
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    AlternatePortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    IsInActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Coordinates: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.DECIMAL(18,15),
      allowNull: true
    },
    Longitude: {
      type: DataTypes.DECIMAL(18,15),
      allowNull: true
    },
    PhonePrefix: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    StateName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPASCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_UNLocation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UNLocation",
        unique: true,
        fields: [
          { name: "UNLocCode" },
        ]
      },
    ]
  });
};
