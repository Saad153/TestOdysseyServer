const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobInvoice_Charges_Cont', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobInvoiceChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice_Charges',
        key: 'Id'
      }
    },
    dSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    dSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    SEBLEquipmentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BL_Equipment',
        key: 'Id'
      }
    },
    SIBLEquipmentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_BL_Equipment',
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
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PPCCId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreeDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LogDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SerialNo: {
      type: DataTypes.BIGINT,
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
    Quantity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Rate: {
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
    TaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetInclTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Margin: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CommissionPercentage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CommissionAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DetentionTariffPlugInId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    MasterEntryAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RunningDetentionContId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_RunningDetention_Charges_Cont',
        key: 'Id'
      }
    },
    CompleteDetention: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    dLGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    LGChargesRecvContId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SImp_EqpInvOtherChgsId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Simp_EqpInvOtherChgs',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_JobInvoice_Charges_Cont',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobInvoice_Charges_Cont",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
