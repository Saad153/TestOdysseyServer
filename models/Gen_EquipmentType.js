const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EquipmentType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EquipType: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EpassCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EquipmentType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EquipmentType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
