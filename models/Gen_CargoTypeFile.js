const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CargoTypeFile', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CargoTypeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddtionalCode: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OrderById: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PCSType: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CargoTypeFile',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CargoTypeFile",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
