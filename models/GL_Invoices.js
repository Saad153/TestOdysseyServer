const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Invoices', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GVDetailId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher_Detail',
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
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    InvoiceAmount: {
      type: DataTypes.DECIMAL(18,3),
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
    FormENo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormEDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GDNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GDDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReconciledStatus: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ReconciledDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReconciledRemarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    WorkOrderDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VendorBillDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Invoices',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IX_GL_Invoices_InvoiceNumber",
        unique: true,
        fields: [
          { name: "PartyId" },
          { name: "InvoiceNumber" },
        ]
      },
      {
        name: "PK_GL_Invoices",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
