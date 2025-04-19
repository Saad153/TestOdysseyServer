const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DetentionTariff_Detention', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DetentionTariffId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_DetentionTariff',
        key: 'Id'
      }
    },
    dPOLCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    dPODCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    EquipCode: {
      type: DataTypes.STRING(100),
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
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    SlabTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_SlabType',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_DetentionTariff_Detention',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_DetentionTariff_Detention",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
