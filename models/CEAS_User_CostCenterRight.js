const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CEAS_User_CostCenterRight', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    CEASUserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CEAS_User',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CEAS_User_CostCenterRight',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CEAS_User_CostCenterRight",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
