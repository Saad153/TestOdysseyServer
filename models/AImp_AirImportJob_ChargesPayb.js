const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AImp_AirImportJob_ChargesPayb', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
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
    VendorId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    InvTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PerUnitFixedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IsManualQty: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Quantity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DiscountAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExchRateLine: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PPCCId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsTaxCharge: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MinimumCharges: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LineAutoQnty: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ManifestRemarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApprovedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ChargesTariffDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    QuotationChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Quotation_Detail',
        key: 'Id'
      }
    },
    IsRebate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VatCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ChargesVATCategory',
        key: 'Id'
      }
    },
    DistributionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_TaxRevDistribution',
        key: 'Id'
      }
    },
    IsTaxApply: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AImp_AirImportJob_ChargesPayb',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AImp_AirImportJob_ChargesPayb",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
