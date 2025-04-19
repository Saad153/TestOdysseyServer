const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AExp_AirExportJob_OrderDetail', {
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
    SerialNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PORefNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Style: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Packages: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PackCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    StatusId: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AExp_AirExportJob_OrderDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AExp_AirExportJob_OrderDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
