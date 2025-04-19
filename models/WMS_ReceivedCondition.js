const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_ReceivedCondition', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReceivedCondition: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_ReceivedCondition',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Rece__3214EC07366A36DC",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
