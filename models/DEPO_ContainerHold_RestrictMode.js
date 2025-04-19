const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ContainerHold_RestrictMode', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RestrictionName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "IX_DEPO_ContainerHold_RestrictMode"
    },
    IsApplyRestriction: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_ContainerHold_RestrictMode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_ContainerHold_RestrictMode",
        unique: true,
        fields: [
          { name: "RestrictionName" },
        ]
      },
      {
        name: "PK_DEPO_ContainerHold_RestrictMode",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
