const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_UserAlert_Log', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AlertId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RaisedByFormName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RaisedByFormPKId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RaisedByFormDocNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RaisedByUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RaisedForUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ForwardToUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RaisedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Remarks: {
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
    }
  }, {
    sequelize,
    tableName: 'Gen_UserAlert_Log',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_UserAlert_Log",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
