const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_UNLocation_Aliases', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    UNLocCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    Aliases: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_UNLocation_Aliases',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_UNLocation_Aliases",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
