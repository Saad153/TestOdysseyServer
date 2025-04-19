const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SysPolElementSource', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Source: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SysPolElementSource',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SysPolElementSource",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
