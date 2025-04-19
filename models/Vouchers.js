const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vouchers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    voucher_No: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    voucher_Id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vType: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    exRate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    settleExRate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chequeNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chequeDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payTo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    voucherNarration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    costCenter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice_Voucher: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice_Id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoices: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    drawnAt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    onAccount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partyId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partyName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partyType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tranDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Companies',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Vouchers',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Vouchers__3213E83FBFEAED0D",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
