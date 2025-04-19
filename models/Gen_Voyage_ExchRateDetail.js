const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Voyage_ExchRateDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    VoyageId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Voyage',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    SellingExchageRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BuyingExchageRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShippingLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_Voyage_ExchRateDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Voyage_ExchRateDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
