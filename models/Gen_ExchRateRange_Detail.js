const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ExchRateRange_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ExchRateRangeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ExchRateRange',
        key: 'Id'
      }
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    ExchRateLower: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    ExchRateUpper: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DefaultExchRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    InterBankRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    OpenMarketRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ExchRateRange_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ExchRateRange_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
