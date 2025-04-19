const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SysPolElementType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ElementTypeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SysPolElementType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SysPolElementType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
