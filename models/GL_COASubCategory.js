const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COASubCategory', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubCategory: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OldGLId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OldGLtxt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ValidCategories: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COASubCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_COASubCategory",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
