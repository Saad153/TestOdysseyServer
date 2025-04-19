const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_LinesTariff', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LineID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    TariffDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FreeDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsStorageApplicable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    StorageNature: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MonthlyFreeDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RatePerDayTue: {
      type: DataTypes.DECIMAL(18,2),
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
    CCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    ExchRate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsRepairTariffInFC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsSelfParty: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsVariableExchRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_LinesTariff',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_LinesTariff",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
