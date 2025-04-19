const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_TerminalInvoice', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TranDate: {
      type: DataTypes.DATE,
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
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
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
    ManifestId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ManifestHeader',
        key: 'Id'
      }
    },
    Narration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsManualNarration: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TotalDebit: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalCredit: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalNet: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
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
    DebitCreditId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalDebitLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalCreditLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalNetLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ReferenceNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BillingModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinalizedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinalizedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinalizedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FinalizedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ReceivablePayableId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_TerminalInvoice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_TerminalInvoice",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
