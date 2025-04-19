const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CommodityCargoType', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CCargoTypeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CommodityCargoType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CommodityCargoType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
