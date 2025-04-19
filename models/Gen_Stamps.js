const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Stamps', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    StampCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    StampName: {
      type: DataTypes.TEXT,
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
    MoveType: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDefaultStamp: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DefaultStampGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HideTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Stamps',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Stamps",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
