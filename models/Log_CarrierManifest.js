const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_CarrierManifest', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CMNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CMDATE: {
      type: DataTypes.DATE,
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
    BiltyNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BiltyDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RouteId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VehicleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_VehicleSetup',
        key: 'Id'
      }
    },
    VehicleNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VehicleTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EngineNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DriverName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DriverPassPortNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DriverCellNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DriverCNIC: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    FormANo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RegistrationNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ChasisNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Driver1Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Driver1CellNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Driver1CNIC: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Driver1PassPortNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TrackerInstalledId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InstalledDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TrackerNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    delvRoute: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ContainerTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsFinalized: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsVoid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsVehicleReleased: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ReleasedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReleasedBy: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    SubCompanyId: {
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
    }
  }, {
    sequelize,
    tableName: 'Log_CarrierManifest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_CarrierManifest",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
