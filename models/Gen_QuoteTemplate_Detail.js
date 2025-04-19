const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_QuoteTemplate_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    GenQuoteTemplateId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Gen_QuoteTemplate',
        key: 'Id'
      }
    },
    ChargeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Accessorials: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BasisId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Sno: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    StandardRate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MinAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    PayableAt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_QuoteTemplate_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_QuoteTemplate_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
