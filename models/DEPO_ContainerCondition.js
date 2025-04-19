const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ContainerCondition', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ConditionDesc: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "IX_DEPO_ContainerCondition_ConditionDesc"
    }
  }, {
    sequelize,
    tableName: 'DEPO_ContainerCondition',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_ContainerCondition_ConditionDesc",
        unique: true,
        fields: [
          { name: "ConditionDesc" },
        ]
      },
      {
        name: "PK_DEPO_ContainerCondition",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
