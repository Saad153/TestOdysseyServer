const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UNPacking_Map', {
    PackCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PackName: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'UNPacking_Map',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UNPacking_MAP",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
