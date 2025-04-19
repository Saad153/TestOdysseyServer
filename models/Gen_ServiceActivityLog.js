const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ServiceActivityLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SALTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ServiceActivityLogType',
        key: 'Id'
      }
    },
    DateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ServiceActivityLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ServiceActivityLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
