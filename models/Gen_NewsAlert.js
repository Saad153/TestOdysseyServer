const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_NewsAlert', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    NewsDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PictureName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PicturePath: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Title: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Particulars: {
      type: DataTypes.STRING(5000),
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
    Link: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_NewsAlert',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_NewsAlert",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
