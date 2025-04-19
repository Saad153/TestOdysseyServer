const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDO', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DONo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EDOFileName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EDODataFile: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    EDOFormatId: {
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DOId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EDOSubmissionLastStatus: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EDOClientLastStatus: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IsCancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EDO",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
