const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_InvOrderStatus', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    OrderStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_InvOrderStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_InvO__3214EC07577624EC",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
