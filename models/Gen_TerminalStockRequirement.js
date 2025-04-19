const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TerminalStockRequirement', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CompanyId: {
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
    tableName: 'Gen_TerminalStockRequirement',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Term__3214EC0709C278EE",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
