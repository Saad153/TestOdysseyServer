const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_GRNMode', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReceivingMode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeliveryMode: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_GRNMode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_GRNM__3214EC071F86D184",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
