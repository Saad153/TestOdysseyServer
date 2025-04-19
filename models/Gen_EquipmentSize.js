const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EquipmentSize', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EquipSize: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TEU: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EquipmentSize',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EquipmentSize",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
