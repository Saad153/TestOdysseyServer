const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Voyage_Terminal', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    VoyageId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Voyage',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    VIRNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IGMNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EGMNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IGMDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EGMDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dSailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SCNNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SACode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SlotOperatorPartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    LocalPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_Voyage_Terminal',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Voyage_Terminal",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
