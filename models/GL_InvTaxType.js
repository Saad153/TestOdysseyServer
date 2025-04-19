const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_InvTaxType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TaxType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_InvTaxType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_InvTaxType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
