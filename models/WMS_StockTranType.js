const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_StockTranType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StockTranType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_StockTranType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Stoc__3214EC075E782836",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
