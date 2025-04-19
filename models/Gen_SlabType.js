const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SlabType', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Intervals: {
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
    isDetention: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isDemurrage: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TotalRows: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SlabType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SlabType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
