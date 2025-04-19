const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_BookingConfirmFromCarrier', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CarrierStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CarrierBookingNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    VoyageNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmptyPickupName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmptyPickupAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmptyPickupDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FullDropOfName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FullDropOfAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CutoffDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SiDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VgmCutOffDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ManifestDueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PolEtdDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PodEtaDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PofdEtaDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Container: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CarrierComments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BrNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ConfirmationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InttraRefNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ClientId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    CommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Commodity',
        key: 'Id'
      }
    },
    PortOfReceiptCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortOfDischargeCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortOfFinalDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    CarrierId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    BookingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BookingRequest',
        key: 'Id'
      }
    },
    ConfirmationStatus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ContractNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FileName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ISoftPortOfReceiptCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPortOfReceiptName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ISoftPortOfLoadingCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPortOfLoadingName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ISoftPortOfDischargeCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPortOfDischargeName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ISoftPortOfFinalDestCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPortOfFinalDestName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ISoftClientId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    },
    ISoftCommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftCommodityMapping',
        key: 'Id'
      }
    },
    ISoftVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftVesselMapping',
        key: 'Id'
      }
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
    ISoftCarrierId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'SExp_BookingConfirmFromCarrier',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_BookingConfirmFromCarrier",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
