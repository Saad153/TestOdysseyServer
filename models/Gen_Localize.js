const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Localize', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Caption: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LocalizeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RegionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Region',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_Localize',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Localize",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
