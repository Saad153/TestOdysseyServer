const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Quotation_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    QuotationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Quotation',
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
    PerUnitFixedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
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
    SizeTypeCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BuyingRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Qty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BuyingRemarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SrNo: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DifferentialTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PaybNatureId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PaybVendorId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ExchRate: {
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
    },
    ServiceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_DeliveryType',
        key: 'Id'
      }
    },
    FromPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    TillPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ViaPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AirLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    AirPortofLoadingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    AirPortofDischargeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    TaxPerc: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IncTaxAmnt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IncTaxLocalAmnt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    GoodsUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChargesCategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges_Category',
        key: 'Id'
      }
    },
    ISoftChargeId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsManualQuantity: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dDGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Quotation_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Quotation_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
