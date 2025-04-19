const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KRA_ManifestLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VesselName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ManifestRefNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ManifestFileName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ManifestFilePath: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    UploadStatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ResponseFilePath: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(300),
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
    }
  }, {
    sequelize,
    tableName: 'KRA_ManifestLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_KRA_ManifestLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
