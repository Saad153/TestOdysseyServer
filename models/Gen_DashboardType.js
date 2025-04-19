const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DashboardType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DashboardTypeName: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_DashboardType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_DashboardType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
