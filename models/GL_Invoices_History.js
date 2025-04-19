const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Invoices_History', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GVDetailHistoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher_Detail_History',
        key: 'Id'
      }
    },
    DocNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    InvoiceNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TaxInvoiceNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    InvoiceTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_InvMode',
        key: 'Id'
      }
    },
    InvoiceDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PartyId: {
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
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    GrossAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    InvoiceAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(100),
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
    WorkOrderDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Invoices_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Invoices_History",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
