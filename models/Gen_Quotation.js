const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Quotation', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    QuotationNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsSecured: {
      type: DataTypes.BOOLEAN,
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
    RouteTypeId: {
      type: DataTypes.BIGINT,
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
    CustomerTypeID: {
      type: DataTypes.BIGINT,
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
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    StageId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AttnPerson: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FromPerson: {
      type: DataTypes.STRING(30),
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
    NetWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Commodity',
        key: 'Id'
      }
    },
    SubjectDesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShipmentSizeCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    NOofPkg: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    HeadterText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FooterText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    InternalRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PONO: {
      type: DataTypes.STRING(50),
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
    SCNo: {
      type: DataTypes.STRING(50),
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
    OverseasAgentId: {
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
    OtherInstructions: {
      type: DataTypes.STRING(500),
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
    PickupLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    IsAutoShipAddr: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ShipperAddress: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsAutoCneeAddr: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ConsigneeAddress: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsCHB: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CustomClearanceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IsTransporter: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TransporterId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
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
    DropOffLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    NoofPCS: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    TotalContainers: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExRateEditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExRateEditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExRateEditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsEditExRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IncoTermsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_IncoTerms',
        key: 'Id'
      }
    },
    AirLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    AirPortOfLoadingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    AirPortOfDischargeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    GrossWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DimentionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Dimension',
        key: 'Id'
      }
    },
    JobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Log_JobType',
        key: 'Id'
      }
    },
    FileNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalProfit: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    DetentionFreeDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ISoftCarrierId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ISoftClientId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ISoftPortofLoadingCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ISoftPortofLoadingName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPortofDischargeCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ISoftPortofDischargeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftCommodity: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BillingVolume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsManualBillingVolume: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    WTUnitId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ISoftCommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftCommodityMapping',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_Quotation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Quotation",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
