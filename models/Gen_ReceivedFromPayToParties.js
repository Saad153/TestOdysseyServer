const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReceivedFromPayToParties', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PartyTitle: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    IsReceivedFrom: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPayTo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReceivedFromPayToParties',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReceivedFromPayToParties",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
