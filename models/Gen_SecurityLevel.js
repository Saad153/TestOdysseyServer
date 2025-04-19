const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SecurityLevel', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SecurityLevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SecurityLevel",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
