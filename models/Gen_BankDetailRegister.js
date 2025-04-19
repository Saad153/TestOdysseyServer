const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_BankDetailRegister', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    BDCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    BDName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BankDetail: {
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
    },
    ApprovedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApprovedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsClientDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAgentDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_BankDetailRegister',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_BankDetailRegister",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
