const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_CarrierManifest_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CMId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_CarrierManifest',
        key: 'Id'
      }
    },
    LogJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    ContainerNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ScannerImageNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log_CarrierManifest_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_CarrierManifest_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
