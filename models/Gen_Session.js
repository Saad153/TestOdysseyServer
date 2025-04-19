const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Session', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Users',
        key: 'Id'
      }
    },
    LoggedInTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LoggedOutTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastAcessTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LoginIP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LoginComputerName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LoginComputerUserName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsMobileSession: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Session',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Session",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
