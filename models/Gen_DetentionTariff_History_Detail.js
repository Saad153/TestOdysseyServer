const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DetentionTariff_History_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DetentionTariffId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DetentionTariffHistoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_DetentionTariff_History',
        key: 'Id'
      }
    },
    DetentionTariffDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RevisionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dPOLCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    dPODCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DaysFrom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysTill: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TariffRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TerminalCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    SlabTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_DetentionTariff_History_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_DetentionTariff_History_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
