const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ISoftParty', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CSULPartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ISoftPartyName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ISoftShortName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ISoftPartyTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SalesRepId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DocsRepId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AccountsRepId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsSeaExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSeaImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLandTransport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTruckingLine: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsOther: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsShippingLine: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirLine: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsShipper: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsConsignee: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSupplier: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsBuyingHouse: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsOverseasAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsNotify: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsForwarder: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsIndenter: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLocalAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCommission: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTransporter: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCHACHB: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWarehouse: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTrucker: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDrayman: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCartage: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsStevedore: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDeliveryAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPotentialCustomer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AWBPrefix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ICAODesignator: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RegistrationCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    InActiveDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InActiveReason: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    IsExpressParcel: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BookingChange: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Release: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TrackingURL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SystemCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsPortterminal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsContainerDepot: {
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
    ISoftSourceCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AccountRepName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SalesRepName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    DocsRepName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    BookingChangeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ReleaseName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    IsMilestoneAttached: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ISoftPartyId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsBuyer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ISoftParty',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ISoftParty",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
