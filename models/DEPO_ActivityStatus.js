const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ActivityStatus', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ActvStatusDesc: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "IX_DEPO_ActivityStatus_ActvStatusDesc"
    }
  }, {
    sequelize,
    tableName: 'DEPO_ActivityStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_ActivityStatus_ActvStatusDesc",
        unique: true,
        fields: [
          { name: "ActvStatusDesc" },
        ]
      },
      {
        name: "PK_DEPO_ActivityStatus",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
