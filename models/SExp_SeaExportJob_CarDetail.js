const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SeaExportJob_CarDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Car_Make: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Car_Model: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Car_ChasisNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Car_EngineNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DENumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_SeaExportJob_CarDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_SeaExportJob_CarDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
