const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_ReleaseInstructionStatus', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Status: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_ReleaseInstructionStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_ReleaseInstructionStatus",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
