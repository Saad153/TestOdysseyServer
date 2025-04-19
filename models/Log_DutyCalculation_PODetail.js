const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_DutyCalculation_PODetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LogJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    DutyCalculationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_DutyCalculation',
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
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    Quantity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ReqAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PONumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DifferenceAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DemanNotePKID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApplyDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReceivableDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RefundableAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RefundAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RefundDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log_DutyCalculation_PODetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_DutyCalculation_PODetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
