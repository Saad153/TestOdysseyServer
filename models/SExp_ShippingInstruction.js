const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_ShippingInstruction', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
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
      type: DataTypes.STRING(1000),
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
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    TotalNetWT: {
      type: DataTypes.DECIMAL(18,3),
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
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
    SEBookingRequestId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BookingRequest',
        key: 'Id'
      }
    },
    NoOfNNBL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TemplateName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PortOfReceipt: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PORCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    POLCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PODCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    POFDCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
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
    CarrierBookingNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftDocNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ISoftSourceId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ISoftSourceType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DDCStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ValueOfGoods: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    ITNNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsPrintOnBLDraft: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAESByCompany: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BLMBLORHBL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BLORGORSWL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FormENo: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    Notify1LocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    Notify2LocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
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
    FormEDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SubmittedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FromMasterBL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsForMasterBL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_ShippingInstruction',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_ShippingInstruction",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
