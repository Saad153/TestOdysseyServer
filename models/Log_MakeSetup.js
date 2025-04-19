const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_MakeSetup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    MakeCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MakeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Specification: {
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
    tableName: 'Log_MakeSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_MakeSetup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
