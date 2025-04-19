const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INQ_RateInquiry', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    JobType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OriginCityId: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    OriginAirportId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    OriginLat: {
      type: DataTypes.DECIMAL(18,15),
      allowNull: true
    },
    OriginLong: {
      type: DataTypes.DECIMAL(18,15),
      allowNull: true
    },
    DestinationCityId: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    DestinationAirportId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    DestinationLat: {
      type: DataTypes.DECIMAL(18,15),
      allowNull: true
    },
    DestinationLong: {
      type: DataTypes.DECIMAL(18,15),
      allowNull: true
    },
    CargoReadyDate: {
      type: DataTypes.DATE,
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
    CommodityName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsDGCargo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IMOClassId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_HazmatClassType',
        key: 'Id'
      }
    },
    UnNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HSCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsPortFees: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCustomClearance: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTradeFinance: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCargoInsurance: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CargoValue: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DestinationZipCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OriginZipCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RFVStatusId: {
      type: DataTypes.INTEGER,
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
    CustomerRefNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IncoTermId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_IncoTerms',
        key: 'Id'
      }
    },
    SalesRepId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    IsExpress: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ShipmentType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsVendorInquiry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLiftgateDelivery: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLiftgatePickup: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWhiteGlove: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsResidentialDelivery: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsResidentialPickup: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SourceId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SourceType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ExpirationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InquiryNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsAmazonDelivery: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    QuotedTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubmitBy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SubmitOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Accessorials: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TotalChargeableWeight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true,
      defaultValue: 0.0
    },
    TotalVolume: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true,
      defaultValue: 0.0
    },
    TotalWeight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true,
      defaultValue: 0.0
    },
    Email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DeliveryByDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShipByDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsContainerLoadingCheck: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPreShipmentInspection: {
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
    IsFromCustomerPortal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INQ_RateInquiry',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INQ_RateInquiry",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
