const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COAPNLCategory', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PNLCategory: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COAPNLCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_COAPNLCategory",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
