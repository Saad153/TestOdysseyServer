const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COACategory', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Category: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COACategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_COACategory",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
