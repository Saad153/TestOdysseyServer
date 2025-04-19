const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Invoices', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_No: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice_Id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ex_rate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    party_Id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    party_Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    paid: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    recieved: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    roundOff: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    total: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    approved: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    companyId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partyType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'Invoices',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Invoices__3213E83F9719247F",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
