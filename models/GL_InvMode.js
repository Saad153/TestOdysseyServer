const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_InvMode', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ModeType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_InvMode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_InvMode",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
