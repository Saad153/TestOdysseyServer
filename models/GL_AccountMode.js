const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AccountMode', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AccountMode: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AccountMode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AccountMode",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
