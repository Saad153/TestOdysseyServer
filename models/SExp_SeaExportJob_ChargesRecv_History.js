const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SeaExportJob_ChargesRecv_History', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RevisionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SEJobChrgRecvId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    InvTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    PerUnitFixedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IsManualQty: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Quantity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DiscountAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExchRateClient: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Margin: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PPCCId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsTaxCharge: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MinimumCharges: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ClientAutoQnty: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ManifestRemarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApprovedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GuidId: {
      type: DataTypes.UUID,
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
    ChargesTariffDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_SeaExportJob_ChargesRecv_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_SeaExportJob_ChargesRecv_History",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
