const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const GL_Currencies = sequelize.define('GL_Currencies', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CurrencyCode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    CurrencyName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CurrencySymbol: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CurrencyChange: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    DecimalPortion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
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
    TPGL_CurrencyCodeID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TPGL_CurrencyCode',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_Currencies',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Currencies",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return GL_Currencies
};
