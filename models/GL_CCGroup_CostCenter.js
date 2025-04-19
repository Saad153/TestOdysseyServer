const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_CCGroup_CostCenter', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CCGroupId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_CCGroup',
        key: 'Id'
      }
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_CCGroup_CostCenter',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_CCGroup_CostCenter",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
