const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Roles', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Roles: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Roles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Roles",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
