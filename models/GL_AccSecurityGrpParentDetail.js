const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AccSecurityGrpParentDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AccSecurityGrpId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_AccSecurityGrp',
        key: 'Id'
      }
    },
    GLParentAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AccSecurityGrpParentDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AccSecurityGrpParentDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
