const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SecurityDepositStatus', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SecurityDepositStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SecurityDepositStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SecurityDepositStatus",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
