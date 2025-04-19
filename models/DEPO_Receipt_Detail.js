const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_Receipt_Detail', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Receipt',
        key: 'Id'
      }
    },
    CAChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerActivityCharges',
        key: 'Id'
      }
    },
    ContainerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Container',
        key: 'Id'
      }
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    AmountReceived: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    STaxAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_Receipt_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_Receipt_Detail",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
