const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ChequeOpening', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DocNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VoucherDate: {
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
    ChequeNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VoucherTo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ChequeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PostedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Narration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DrawnBank: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsDeposited: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DepositedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AmountLC: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    AmountVC: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    VoucherTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_VoucherType',
        key: 'Id'
      }
    },
    IsTransfered: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPosted: {
      type: DataTypes.BOOLEAN,
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
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
    CostCenterId: {
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
    },
    ChqDeliveryRemarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsChqPrinted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsChqHold: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ChqDeliveredTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsChqSigned: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ChqCrossId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChqPrintDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_ChequeOpening',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_ChequeOpening",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
