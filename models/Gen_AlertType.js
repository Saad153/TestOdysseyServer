const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_AlertType', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AlertTypeName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_AlertType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_AlertType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
