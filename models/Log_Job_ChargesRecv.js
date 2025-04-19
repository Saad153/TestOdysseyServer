const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_Job_ChargesRecv', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LogJobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Log_Job',
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
    CustomerId: {
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
    BookingRate: {
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
    ExchRateClient: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PaidByClient: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsTaxCharge: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ReferenceNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(200),
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
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dVehicleNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PPCCId: {
      type: DataTypes.INTEGER,
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
    },
    QuotationChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Quotation_Detail',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Log_Job_ChargesRecv',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_Job_ChargesRecv",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
