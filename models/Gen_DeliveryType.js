const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DeliveryType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeliveryType: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EpassCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_DeliveryType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_DeliveryType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
