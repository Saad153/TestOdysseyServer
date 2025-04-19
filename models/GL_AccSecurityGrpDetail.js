const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AccSecurityGrpDetail', {
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
    GLAccountId: {
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
    tableName: 'GL_AccSecurityGrpDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AccSecurityGrpDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
