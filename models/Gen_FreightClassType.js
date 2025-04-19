const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_FreightClassType', {
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
    tableName: 'Gen_FreightClassType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_FreightClassType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
