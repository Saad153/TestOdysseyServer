const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TaxInvNature', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NatureType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_TaxInvNature',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_TaxInvNature",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
