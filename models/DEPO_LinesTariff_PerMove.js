const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_LinesTariff_PerMove', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LineTariffId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'DEPO_LinesTariff',
        key: 'Id'
      },
      unique: "IX_DEPO_LinesTariff_PerMove_ChargesId_ActivityId_SizeTypeCode"
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      },
      unique: "IX_DEPO_LinesTariff_PerMove_ChargesId_ActivityId_SizeTypeCode"
    },
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Activity',
        key: 'ID'
      },
      unique: "IX_DEPO_LinesTariff_PerMove_ChargesId_ActivityId_SizeTypeCode"
    },
    SizeTypeCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      },
      unique: "IX_DEPO_LinesTariff_PerMove_ChargesId_ActivityId_SizeTypeCode"
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    AmountKB: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    ModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CurrencyID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    BasisID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_LinesTariff_PerMove',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_LinesTariff_PerMove_ChargesId_ActivityId_SizeTypeCode",
        unique: true,
        fields: [
          { name: "ChargesId" },
          { name: "ActivityId" },
          { name: "SizeTypeCode" },
          { name: "LineTariffId" },
        ]
      },
      {
        name: "PK_DEPO_LinesTariff_PerMove",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
