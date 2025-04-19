const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CashBookSaveAccount', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account3: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account4: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account5: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account6: {
      type: DataTypes.BIGINT,
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
    tableName: 'CashBookSaveAccount',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CashBookSaveAccount",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
