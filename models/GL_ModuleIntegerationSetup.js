const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ModuleIntegerationSetup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Template: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DBName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Server: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Login: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(100),
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
    IsSameServer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_ModuleIntegerationSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__GL_Modul__3214EC074068A262",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
