const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INQ_QuoteChargeTemplate_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    QuoteTemplateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'INQ_QuoteChargeTemplate',
        key: 'Id'
      }
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    Category: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Accessorials: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Basis: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    StandardRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    MinAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PayableAt: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INQ_QuoteChargeTemplate_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INQ_QuoteChargeTemplate_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
