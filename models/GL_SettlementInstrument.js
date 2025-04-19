const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_SettlementInstrument', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GVDetailId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher_Detail',
        key: 'Id'
      }
    },
    DocNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    InsTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_InvMode',
        key: 'Id'
      }
    },
    InsDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PartyId: {
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
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    InsAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    IsAuto: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(100),
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
    EPDocNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RefNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BankId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    EPType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_SettlementInstrument',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_SettlementInstrument",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
