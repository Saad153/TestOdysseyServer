const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_BankSubType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubType: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_BankSubType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_BankSubType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
