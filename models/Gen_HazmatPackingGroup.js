const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_HazmatPackingGroup', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TypeName: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_HazmatPackingGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_HazmatPackingGroup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
