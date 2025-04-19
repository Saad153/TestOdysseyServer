const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_LinesTariff_PerDay', {
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
      unique: "IX_DEPO_LinesTariff_PerDay_ChargesId_SizeTypeID"
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      },
      unique: "IX_DEPO_LinesTariff_PerDay_ChargesId_SizeTypeID"
    },
    SizeTypeCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      },
      unique: "IX_DEPO_LinesTariff_PerDay_ChargesId_SizeTypeID"
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    AmountKB: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_LinesTariff_PerDay',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_LinesTariff_PerDay_ChargesId_SizeTypeID",
        unique: true,
        fields: [
          { name: "LineTariffId" },
          { name: "ChargesId" },
          { name: "SizeTypeCode" },
        ]
      },
      {
        name: "PK_DEPO_LinesTariff_PerDay",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
