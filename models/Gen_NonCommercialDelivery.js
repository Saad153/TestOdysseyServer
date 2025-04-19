const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_NonCommercialDelivery', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TypeName: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_NonCommercialDelivery',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_NonCommercialDelivery",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
