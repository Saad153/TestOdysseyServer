const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_BillingMode', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    BillModeDesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_BillingMode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_BillingMode",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
