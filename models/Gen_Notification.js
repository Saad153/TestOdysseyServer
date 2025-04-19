const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Notification', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Notification: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Notification',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Notification",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
