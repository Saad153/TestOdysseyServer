const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_OperationType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OperationName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ShortCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_OperationType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_OperationType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
