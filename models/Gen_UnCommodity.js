const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_UnCommodity', {
    HsCode: {
      type: DataTypes.STRING(9),
      allowNull: false,
      primaryKey: true
    },
    HsDescription: {
      type: DataTypes.STRING(115),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_UnCommodity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_UnCommodity",
        unique: true,
        fields: [
          { name: "HsCode" },
        ]
      },
    ]
  });
};
