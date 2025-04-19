const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_ActivityType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ActivityType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log_ActivityType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_ActivityType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
