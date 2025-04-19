const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_BookingToCarrier', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
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
    IsActualShipper: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ShipperInttraId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsShowConsignee: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ConsigneeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
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
    HSCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsEmailUser: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EmailUser: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MoveTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EquipmentComments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GeneralInformation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EarliestDepartureDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GrossWeight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsHazardousGoods: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ImoClassCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UndgNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ProperShippingName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EquipmentTemperature: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    NoOfPackages: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    PackingUnitCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    ISoftPackingUnitId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftPackingUnit',
        key: 'Id'
      }
    },
    IsSubmitVesselVoyage: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CarrierReciever: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SubmitMode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubmittedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SubmittedBy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ProcessError: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ProcessStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FlashPointUnit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    InnerNoOfPackages: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    InnerPackingUnitCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    IsoftInnerPackingUnitId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftPackingUnit',
        key: 'Id'
      }
    },
    OuterNoOfPackages: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    OuterPackingUnitCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    ISoftOuterPackingUnitId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftPackingUnit',
        key: 'Id'
      }
    },
    PackagingGroupCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CargoNatureId: {
      type: DataTypes.INTEGER,
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
    ConsigneeLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
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
    BookingNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_BookingToCarrier',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_BookingToCarrier",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
