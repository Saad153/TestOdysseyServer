const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AExp_BL_Dimension', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AEBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_BL',
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VolumetricWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AExp_BL_Dimension',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AExp_BL_Dimension",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
