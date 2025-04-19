const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_PaymentTerm', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PaymentTerm: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_PaymentTerm',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_PaymentTerm",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
