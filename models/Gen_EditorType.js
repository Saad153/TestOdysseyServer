const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EditorType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EditorTypeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EditorType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EditorType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
