const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CommonStatus', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StatusType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CommonStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CommonStatus",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
