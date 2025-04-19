const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_PrintOn', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PrintType: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_PrintOn',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_PrintOn",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
