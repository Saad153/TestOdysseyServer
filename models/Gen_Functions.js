const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Functions', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FunctionId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FunctionName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AccessType: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormTypes: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Functions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Functions",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
