const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TerminalStockRequirement_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    StockReqId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TerminalStockRequirement',
        key: 'Id'
      }
    },
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    StockRequired: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StockAllocate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_TerminalStockRequirement_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Term__3214EC070D9309D2",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
