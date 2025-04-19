const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TaxFilerStatus', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FilerStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_TaxFilerStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_TaxFilerStatus",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
