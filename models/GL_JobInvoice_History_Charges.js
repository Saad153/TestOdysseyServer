const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobInvoice_History_Charges', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RevisionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    JobInvoiceHistoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice_History',
        key: 'Id'
      }
    },
    JobInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    JobInvoiceChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SEJobChargesRecvId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SIJobChargesRecvId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dAEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AEJobChargesRecvId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dAIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AIJobChargesRecvId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dLGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LGJobChargesRecvId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dDGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EquipCode: {
      type: DataTypes.STRING(10),
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
    PPCCId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChargeSysCode: {
      type: DataTypes.STRING(5),
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
    MasterEntryAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CompleteDetention: {
      type: DataTypes.DECIMAL(18,5),
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
    }
  }, {
    sequelize,
    tableName: 'GL_JobInvoice_History_Charges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobInvoice_History_Charges",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
