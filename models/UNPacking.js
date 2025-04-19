const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UNPacking', {
    PackCode: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    PackName: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
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
    EditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EPASPackCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StdCode2Digit: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    StdCode3Digit: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UNPacking',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UnPacking$S_UnPack#PX",
        unique: true,
        fields: [
          { name: "PackCode" },
        ]
      },
    ]
  });
};
