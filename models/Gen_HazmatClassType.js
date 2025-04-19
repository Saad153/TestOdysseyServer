const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_HazmatClassType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TypeName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    IMOClassNumber: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_HazmatClassType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_HazmatClassType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
