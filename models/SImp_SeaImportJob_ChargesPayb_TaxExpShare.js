const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_SeaImportJob_ChargesPayb_TaxExpShare', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SImpChargesPaybId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob_ChargesPayb',
        key: 'Id'
      }
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
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
    tableName: 'SImp_SeaImportJob_ChargesPayb_TaxExpShare',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_SeaImportJob_ChargesPayb_TaxExpShare",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
