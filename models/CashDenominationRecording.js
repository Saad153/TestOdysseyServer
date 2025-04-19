const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CashDenominationRecording', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EntryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COAAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    Balance: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    NoOf_5000: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOf_1000: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOf_500: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOf_100: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOf_50: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOf_20: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOf_10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOf_5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOf_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOf_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Bal_5000: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Bal_1000: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Bal_500: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Bal_100: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Bal_50: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Bal_20: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Bal_10: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Bal_5: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Bal_2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Bal_1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Coins: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Desc_1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Desc_2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Desc_3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Desc_4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Value_1: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Value_2: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Value_3: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Value_4: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Total: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Difference: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
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
    Version: {
      type: DataTypes.INTEGER,
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
    BranchId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LockedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CashDenominationRecording',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CashDenominationRecording",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
