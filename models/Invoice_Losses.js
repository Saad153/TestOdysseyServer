const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Invoice_Losses', {
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
    InvoiceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Invoices',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Invoice_Losses',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Invoice___3213E83FCDEE5A26",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
