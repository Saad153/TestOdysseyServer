const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_Receipt', {
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
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TranTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TransType: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CAId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerActivity',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CashClientId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IsVoid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    GLVoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    ShiftId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ShiftSetup',
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
    IsPrinted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AdvancePORefId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BillModeId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    STaxAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    NetTotal: {
      type: DataTypes.DECIMAL(18,2),
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Activity',
        key: 'ID'
      }
    },
    IsSelfParty: {
      type: DataTypes.BOOLEAN,
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
    IsSTaxApplicable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_Receipt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_Receipt",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
