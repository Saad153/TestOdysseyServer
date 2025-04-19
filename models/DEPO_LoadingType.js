const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_LoadingType', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LoadingType: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_LoadingType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_LoadingType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
