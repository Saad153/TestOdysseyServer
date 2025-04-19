const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ChequeType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ChequeType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_ChequeType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_ChequeType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
