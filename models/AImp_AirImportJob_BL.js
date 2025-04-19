const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AImp_AirImportJob_BL', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      },
      unique: "IX_AImp_AirImportJob_BL_AIJobId"
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HAWBNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MAWBNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    HAWBDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MAWBDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AirLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    FlightNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DepartureDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DepartureTime: {
      type: DataTypes.DATE,
      allowNull: true
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
    NotifyParty1Id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    NotifyParty2Id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    DeliveryAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    Shipper: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Consignee: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    NotifyParty1: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    NotifyParty2: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    MarksAndNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GoodsDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DeliveryAgent: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PlaceOfIssue: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PlaceOfIssueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CustomerRefNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NoOfOriginalBL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FlightOne: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FlightOneDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FlightTwo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FlightTwoDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    To1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ByFirstCarrier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    To2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    By2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    To3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    By3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Currency: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Charges: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    WTPP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    WTCC: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OtherPP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OtherCC: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DeclareValueForCarriage: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DeclareValueForCustom: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    AmountOfInsurance: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    HandlingInfo: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    FormENumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FormEDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NoOfPcs1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    UnitOfPcs1: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    GrossWeight1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    UnitOfWeightId1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateClass1: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ItemNumber1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ChargeableWeight1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RatePerCharge1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ItemTotal1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LineWeight1: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NoOfPcs2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    UnitOfPcs2: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    GrossWeight2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    UnitOfWeightId2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateClass2: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ItemNumber2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ChargeableWeight2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RatePerCharge2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ItemTotal2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LineWeight2: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NoOfPcs3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    UnitOfPcs3: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    GrossWeight3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    UnitOfWeightId3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateClass3: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ItemNumber3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ChargeableWeight3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RatePerCharge3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ItemTotal3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LineWeight3: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NoOfPcs4: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    UnitOfPcs4: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    GrossWeight4: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    UnitOfWeightId4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateClass4: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ItemNumber4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ChargeableWeight4: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RatePerCharge4: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ItemTotal4: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LineWeight4: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalVolume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    VolumetricWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    WeightChargesPP: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    WeightChargesCC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ValuationChargesPP: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ValuationChargesCC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxPP: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxCC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CurrencyConvertionRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CCChargesInDestCurrency: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ChargesAtDestination: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalCollectCharges: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    spShipper1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spShipper2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spShipper3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spShipper4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spShipper5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spShipper6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spConsignee1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spConsignee2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spConsignee3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spConsignee4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spConsignee5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spConsignee6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty11: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty12: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty13: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty14: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty15: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty16: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty21: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty22: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty23: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty24: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty25: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spNotifyParty26: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spDeliveryAgent1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spDeliveryAgent2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spDeliveryAgent3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spDeliveryAgent4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spDeliveryAgent5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spDeliveryAgent6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UOMId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreightTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalOthrChrgDueAgentPP: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalOthrChrgDueAgentCC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalOthrChrgDueCarrierPP: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalOthrChrgDueCarrierCC: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalPrepaid: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalCollect: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AirportOfLoading: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    AirportOfDischarge: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    AirportOfFinalDest: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    InvoiceNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    InvoiceDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ExpDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContractNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ContractDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LCNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LCDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RequiredDocument: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsVoid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VoidBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VoidOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VoidLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsApplyToCWT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IndexNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AImp_AirImportJob_BL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_AImp_AirImportJob_BL_AIJobId",
        unique: true,
        fields: [
          { name: "AIJobId" },
        ]
      },
      {
        name: "PK_AImp_AirImportJob_BL",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
