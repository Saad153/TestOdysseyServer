const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Gen_Charges = sequelize.define('Gen_Charges', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ChargesCode: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    ChargesName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    InvoicePrintingName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PerUnitFixedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChargesNatureId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ChargesNature',
        key: 'Id'
      }
    },
    ChargesTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ReportingGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ChargesReportingGroup',
        key: 'Id'
      }
    },
    ReportingOrder: {
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
    IsInActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTaxable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SysCode: {
      type: DataTypes.STRING(5),
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
    IsApplyCompanyRestriction: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DefaultPayablePartyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsSeaExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSeaImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWarehouse: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLogistic: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SEFrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SIFrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AEFrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AIFrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LogFrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WHFrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsOther: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OTFrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DefaultReceivablePartyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChargesTAG: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DefaultforCarrier: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DefaultforAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CarrierId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    LocalizeChargesName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsTaxPayable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    HSN_SAC_Code: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    CustVendId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IsTaxPrincipal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VATCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ChargesVATCategory',
        key: 'Id'
      }
    },
    ChargesCategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges_Category',
        key: 'Id'
      }
    },
    IsReimbursment: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TPGL_AccountRevenueId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TPGL_Account_List',
        key: 'Id'
      }
    },
    TPGL_AccountExpenseId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TPGL_Account_List',
        key: 'Id'
      }
    },
    ExcludeOnSOC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Charges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Charges",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return Gen_Charges
};
