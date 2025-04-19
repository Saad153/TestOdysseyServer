const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ContainerStatus', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    StatusDesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_ContainerStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_ContainerStatus",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
