const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AImp_AirImportJob_BLDimension', {
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
    dLength: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    dWidth: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    dHeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NoOfPcs: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    VolumetricWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AImp_AirImportJob_BLDimension',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AImp_AirImportJob_BLDimension",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
