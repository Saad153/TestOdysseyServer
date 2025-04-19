const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_StackingArea', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    StackingAreaName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "IX_DEPO_StackingArea_StackingAreaName"
    },
    CCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_StackingArea',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_StackingArea_StackingAreaName",
        unique: true,
        fields: [
          { name: "StackingAreaName" },
        ]
      },
      {
        name: "PK_DEPO_StackingArea",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
