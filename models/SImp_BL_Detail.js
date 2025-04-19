const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_BL_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SIBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_BL',
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
    VesselName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VoyageNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PortOfLoading: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PortOfDischarge: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PortOfDelivery: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DeliveryAgent: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    NoOfOriginalBL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    KLMId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreightTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AgentStamp: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MarksAndNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NoOfPkgs: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    GoodsDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GrossWeight: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Measurement: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    OnBoardDate: {
      type: DataTypes.DATE,
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
    IsDetentionTraiff: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    InvoiceNo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    InvoiceDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpNo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ExpDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContractNo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ContractDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LCNo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LCDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShippingRefNo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ClientRefNo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
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
    DeliveryAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IsManualWTUnit: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TotalGrossWT: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    TotalNetWT: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    TotalCBM: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    TotalNoOfPackages: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SUBBLNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    QuantityValue: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    UnitValue: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    QuantityUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_UnitsOfMeasurment',
        key: 'Id'
      }
    },
    HSCode: {
      type: DataTypes.STRING(9),
      allowNull: true,
      references: {
        model: 'Gen_UnCommodity',
        key: 'HsCode'
      }
    },
    HazmatClassTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_HazmatClassType',
        key: 'Id'
      }
    },
    TotalTareWt: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    UNOCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    HazmatPackingGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_HazmatPackingGroup',
        key: 'Id'
      }
    },
    CountryOfOriginCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    SerialTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_EPAS_SerialType',
        key: 'Id'
      }
    },
    SerialExceptionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SerialCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HazmatCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ShipperCityCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ConsigneeCityCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    }
  }, {
    sequelize,
    tableName: 'SImp_BL_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_BL_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
