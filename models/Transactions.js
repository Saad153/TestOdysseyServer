const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Transactions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mode: {
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
    chequeTran: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payAcc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    onAcc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    drawn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankCharges: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankAcc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    exRate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taxAmount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taxAc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gainLoss: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gainLossAc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partyType: {
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
    invoices: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Transactions',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Transact__3213E83FF6627512",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
