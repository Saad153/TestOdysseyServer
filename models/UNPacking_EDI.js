const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UNPacking_EDI', {
    EDI_Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ANS_Code: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EDI_Code: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UNPacking_EDI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UNPacking_EDI$Index_5EAF4552_4603_4BC5",
        unique: true,
        fields: [
          { name: "EDI_Id" },
        ]
      },
    ]
  });
};
