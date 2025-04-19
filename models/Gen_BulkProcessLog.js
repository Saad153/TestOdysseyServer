const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_BulkProcessLog', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ActionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NewVesselOrAirLineID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    NewVesselOrAirLineName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NewVoyageOrFlightNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    SailingRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BayingRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    JobNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    JobDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MenifestNo: {
      type: DataTypes.STRING(15),
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
    VesselOrAirLineID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    VesselOrAirLineName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VoyageOrFlightNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TariffApply: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TariffApplyLog: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PartyName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HblNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MblNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ProcessStatas: {
      type: DataTypes.TEXT,
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
    ApplySequenceId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_BulkProcessLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Bulk__3214EC2736FF33B9",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
