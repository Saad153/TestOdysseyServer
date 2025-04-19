const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AExp_BL_Stamp', {
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
    StampId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Stamps',
        key: 'Id'
      }
    },
    Remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StampDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StampGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AExp_BL_Stamp',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AExp_BL_Stamp",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
