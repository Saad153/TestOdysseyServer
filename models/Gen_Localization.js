const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Localization', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LocalizationName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LocalizationDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Localization',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Localization",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
