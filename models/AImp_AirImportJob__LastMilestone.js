const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AImp_AirImportJob__LastMilestone', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    OperationalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OperationalMilestone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DocumentationalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DocumentationalMilestone: {
      type: DataTypes.STRING(100),
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
    Longitude: {
      type: DataTypes.DECIMAL(18,9),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.DECIMAL(18,9),
      allowNull: true
    },
    LastLocationCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ActualETA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PlannedEta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PlannedEtd: {
      type: DataTypes.DATE,
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
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    PortOfDischargeCode: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_UNAirport',
        key: 'Id'
      }
    },
    PortOfFinalDestinationCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ScacCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MblNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CarrierBookingNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ActualETD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PlannedCutOffDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OperationalMilestoneCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ArrivedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DepartedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EmptyOutDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GateIn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Delivered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EmptyReturned: {
      type: DataTypes.DATE,
      allowNull: true
    },
    APICallDurSecond: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Vessel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VoyageNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CargoType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StatusCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Exception: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ActivityCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CountainerCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BookingId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AImp_AirImportJob__LastMilestone',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__AImp_Air__3214EC071765C178",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
