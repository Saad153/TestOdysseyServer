const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ContainerActivityType', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TransType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_ContainerActivityType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_ContainerActivityType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
