const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ServiceActivityLogType', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ServiceActivityLogType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ServiceActivityLogType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
