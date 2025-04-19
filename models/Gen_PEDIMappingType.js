const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_PEDIMappingType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EDIType: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_PEDIMappingType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_PEDIMappingType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
