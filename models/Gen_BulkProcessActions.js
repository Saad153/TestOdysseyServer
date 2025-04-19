const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_BulkProcessActions', {
    ActionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ActionName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FunctionId: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_BulkProcessActions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Bulk__FFE3F4D9159E3FEE",
        unique: true,
        fields: [
          { name: "ActionId" },
        ]
      },
    ]
  });
};
