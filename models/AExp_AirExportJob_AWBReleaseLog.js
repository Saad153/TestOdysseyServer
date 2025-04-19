const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AExp_AirExportJob_AWBReleaseLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    AWBBReleaseStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AWBHandoverId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AExp_AirExportJob_AWBReleaseLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AExp_AirExportJob_BLReleseLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
