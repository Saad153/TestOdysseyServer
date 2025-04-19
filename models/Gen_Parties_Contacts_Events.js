const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Parties_Contacts_Events', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartiesContactId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Contacts',
        key: 'Id'
      }
    },
    EventTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CRM_Event',
        key: 'Id'
      }
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EventDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EventMessage: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Parties_Contacts_Events',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Parties_Contacts_Events",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
