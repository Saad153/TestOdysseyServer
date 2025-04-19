const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_ReleaseInstructionType', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TypeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_ReleaseInstructionType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_ReleaseInstructionType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
