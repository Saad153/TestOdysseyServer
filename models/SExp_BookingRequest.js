const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_BookingRequest', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RequestNo: {
      type: DataTypes.STRING(20),
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
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    JobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_JobType',
        key: 'Id'
      }
    },
    SubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_JobSubType',
        key: 'Id'
      }
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpirationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SalesRepId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    ClientId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    LocalVendorId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ShipperId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ConsigneeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ShipingLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    OverseasAgentId: {
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
    VesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsAutoShipAddr: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ShipperAddress: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    IsAutoCneeAddr: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ConsigneeAddress: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Weight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NoOfPackages: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    TEUS: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TotalContainer: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    PickupLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    DropOffLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
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
    TotalReceivable: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TotalPayable: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsInactive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TransportType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OtherInstructions: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    InternalRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReadyDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShipByDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ArriveNoLaterThan: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ServiceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_DeliveryType',
        key: 'Id'
      }
    },
    TransitTime: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ApprovedStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedStatusBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedStatusOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApprovedStatusLog: {
      type: DataTypes.STRING(100),
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
    IsSubmitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SubmittedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubmittedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SubmittedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SubmittedRemarks: {
      type: DataTypes.STRING(200),
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
    ISoftShipperId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    },
    ISoftConsigneeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    },
    ISoftShippingLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    },
    ISoftLocalVendorId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    },
    ISoftOverseasAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    },
    SourceCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ISoftCommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ISoftVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ISoftPortOfReceiptCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ISoftPortOfReceiptName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ISoftPortOfLoadingName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPortOfDischargeCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ISoftPortOfDischargeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPortOfFinalDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ISoftPortOfFinalDestName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPickupLocationCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ISoftPickupLocationName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftDropOffLocationCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ISoftDropOffLocationName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsJobCreated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CarrierBookingNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SourceId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ISoftShipperLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftPartyLocation',
        key: 'Id'
      }
    },
    ISoftConsigneeLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftPartyLocation',
        key: 'Id'
      }
    },
    ShipperLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    ConsigneeLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    BuyRate: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    SellRate: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    PaymentStatus: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CancelReasonId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BookingStatusId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SubmitStatusId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CarrierStatusId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsCancel: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CancelBy: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CancelDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RateType: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ContractNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsAgreedRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    NacCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CustomerRefNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CutOffDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ISoftSalesRepId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftEmployeeMapping',
        key: 'Id'
      }
    },
    ChaChbId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ISoftChaChbId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    },
    BuyerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ISoftBuyerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftParty',
        key: 'Id'
      }
    },
    ISoftContainerDepotId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftPartyLocation',
        key: 'Id'
      }
    },
    ContainerDepotId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    FreeHandNominatedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreightTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateTypeDescription: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_BookingRequest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_BookingRequest",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
