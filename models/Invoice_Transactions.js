const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Invoice_Transactions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gainLoss: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    InvoiceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Invoices',
        key: 'id'
      }
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vouchers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Invoice_Transactions',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Invoice___3213E83F90F96A94",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
