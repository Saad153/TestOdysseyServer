const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AImp_ManifestHeader', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(15),
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
    FlightScheduleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Flight_Schedule',
        key: 'Id'
      }
    },
    ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ArrivalTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastPortofCallCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    LocalAirPortId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    IGMNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EGMNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IGMDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ManifestRef: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RotationNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NoOfInstall: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SeqNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SACode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OperatorCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LocalCustomId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_LocalCustom',
        key: 'Id'
      }
    },
    CallSignCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ContainerLinesCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsDPACreated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IGMDocNumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IGMDocYear: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CountryCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    AirCompany: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CaptainName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BerthWarfTerm: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SameBottomCargo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ShadeNumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AirLicenseId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ShippingAgencyLicense',
        key: 'Id'
      }
    },
    GroundDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StartingIndexNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BookNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GuaranteeNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VIRNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PreAlertDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DocRecFromAirLineDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DocRecFromAirLineTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateOfAmendment: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ManifestStageId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    Remarks: {
      type: DataTypes.STRING(50),
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
    DepartureDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DepartureTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IATAAgentCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AccountNo: {
      type: DataTypes.STRING(15),
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
    }
  }, {
    sequelize,
    tableName: 'AImp_ManifestHeader',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AImp_ManifestHeader",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
