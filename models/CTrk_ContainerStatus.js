const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTrk_ContainerStatus', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Status: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CTrk_ContainerStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CTrk_ContainerStatus",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
