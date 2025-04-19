const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AImp_AirImportJob_OrderDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
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
    tableName: 'AImp_AirImportJob_OrderDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AImp_AirImportJob_OrderDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
