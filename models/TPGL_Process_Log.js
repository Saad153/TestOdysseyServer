const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TPGL_Process_Log', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LogDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InvoiceID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    FormName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UserId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Action: {
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
    }
  }, {
    sequelize,
    tableName: 'TPGL_Process_Log',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TPGL_Pro__3214EC075F2233AC",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
