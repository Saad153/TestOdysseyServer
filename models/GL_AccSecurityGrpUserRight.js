const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AccSecurityGrpUserRight', {
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
    CEASUserId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DataEnrtyRight: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ReportRight: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AccSecurityGrpUserRight',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AccSecurityGrpUserRight",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
