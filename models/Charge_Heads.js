const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Charge_Heads', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    charge: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    particular: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partyId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoiceType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    basis: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pp_cc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    size_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dg_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qty: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rate_charge: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    discount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taxPerc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_apply: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tax_amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    net_amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ex_rate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    local_amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    approved_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    approval_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partyType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    InvoiceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Invoices',
        key: 'id'
      }
    },
    SEJobId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SE_Jobs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Charge_Heads',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Charge_H__3213E83F998E4DA4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
