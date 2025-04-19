const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ChargesNature', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ChargesNature: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ChargesNature',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ChargesNature",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
