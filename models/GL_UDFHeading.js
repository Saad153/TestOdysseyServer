const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_UDFHeading', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UDFFields: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UDFCaption: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_UDFHeading',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_COA_UDFHeading",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
