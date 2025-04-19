const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ContainerActivityCharges', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CATranId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerActivity',
        key: 'Id'
      },
      unique: "IX_DEPO_ContainerActivityCharges_Gen_Charges_CATranIdContainerIdChargesId"
    },
    LineTariffId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_LinesTariff',
        key: 'Id'
      }
    },
    ContainerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Container',
        key: 'Id'
      },
      unique: "IX_DEPO_ContainerActivityCharges_Gen_Charges_CATranIdContainerIdChargesId"
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      },
      unique: "IX_DEPO_ContainerActivityCharges_Gen_Charges_CATranIdContainerIdChargesId"
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Discount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    NetAmount: {
      type: DataTypes.DECIMAL(18,2),
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
    ExchRate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    AmountFC: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    KBAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_ContainerActivityCharges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_ContainerActivityCharges_Gen_Charges_CATranIdContainerIdChargesId",
        unique: true,
        fields: [
          { name: "CATranId" },
          { name: "ContainerId" },
          { name: "ChargesId" },
        ]
      },
      {
        name: "PK_DEPO_ContainerActivityCharges",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
