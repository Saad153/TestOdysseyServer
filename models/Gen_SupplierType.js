const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SupplierType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TypeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SupplierType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAX_SupplierType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
