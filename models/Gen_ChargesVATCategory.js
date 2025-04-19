const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ChargesVATCategory', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VATCategory: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ChargesVATCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ChargesVATCategory",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
