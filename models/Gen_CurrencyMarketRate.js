const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CurrencyMarketRate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    DateOfRate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OpenMarketRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    InterBankRate: {
      type: DataTypes.DECIMAL(18,6),
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
    tableName: 'Gen_CurrencyMarketRate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CurrencyMarketRate",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
