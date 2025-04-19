const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Wharf', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    WharfCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    WharfName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    WharfShortName: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    WharfAddress: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    WharfEmail: {
      type: DataTypes.STRING(500),
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
    }
  }, {
    sequelize,
    tableName: 'Gen_Wharf',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Wharf",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
