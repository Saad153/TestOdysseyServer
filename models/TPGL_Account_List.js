const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TPGL_Account_List', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AccountCode: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    AccountName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    AccountCategory: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    AccountSubCategory: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    AccountType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remaks: {
      type: DataTypes.STRING(200),
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
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TPGL_Account_List',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TPGL_Acc__3214EC075B51A2C8",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
