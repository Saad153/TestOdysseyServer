const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_TerminalInvoice_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TerminalInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_TerminalInvoice',
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
    ContainerNo: {
      type: DataTypes.STRING(15),
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
    dCurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    dExchangeRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BillVol: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    TariffCBM: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    TariffBL: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    Debit: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Credit: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ShipmentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DebitLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CreditLC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DeliveryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    dDebitCreditId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    IsManualRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_TerminalInvoice_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_TerminalInvoice_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
