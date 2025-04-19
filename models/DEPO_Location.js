const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_Location', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LocationCode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LocationName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "IX_DEPO_Location_LocationName"
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CCenterId: {
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
    tableName: 'DEPO_Location',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_Location_LocationName",
        unique: true,
        fields: [
          { name: "LocationName" },
        ]
      },
      {
        name: "PK_DEPO_Location",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
