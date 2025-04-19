const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_FileCategory', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_FileCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_File__3214EC07201B030A",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
