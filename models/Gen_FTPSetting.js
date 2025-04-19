const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_FTPSetting', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FtpName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FtpServer: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    IsSftp: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Port: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Login: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InBondFolder: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OutBondFolder: {
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
    },
    IsPessive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_FTPSetting',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_FTPSetting",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
