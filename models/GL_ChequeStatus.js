const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ChequeStatus', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ChequeStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_ChequeStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_ChequeStatus",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
