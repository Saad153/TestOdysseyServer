const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SurrenderType', {
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
    tableName: 'SExp_SurrenderType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_SurrenderType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
