const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SecurityType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SecurityType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SecurityType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SecurityType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
