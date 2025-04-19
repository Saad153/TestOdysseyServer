const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ModuleIntegrationLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GL_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GL_TranType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GL_Partid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GL_Partcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GL_Partname: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    GL_Voutype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GL_Module: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    GL_Refno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GL_VouchNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GL_ReversalNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GL_Narration: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    LogDataTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    MStatus: {
      type: DataTypes.STRING(50),
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
    tableName: 'GL_ModuleIntegrationLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__GL_Modul__3214EC077C1A6C5A",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
