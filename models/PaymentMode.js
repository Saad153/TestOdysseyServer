const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaymentMode', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PaymentMode: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PaymentMode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PaymentMode",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
