const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COARule', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Rules: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COARule',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_COA_Rule",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
