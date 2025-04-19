const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SeaExportJob_ChargesPayb_TaxExpShare', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SExpChargesPaybId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob_ChargesPayb',
        key: 'Id'
      }
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
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
    TaxAuthorityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TaxAuthority',
        key: 'Id'
      }
    },
    ExpenseSharePercentage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RevenueShareAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsManualTaxApply: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ManualTaxPercentage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ManualTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_SeaExportJob_ChargesPayb_TaxExpShare',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_SeaExportJob_ChargesPayb_TaxExpShare",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
