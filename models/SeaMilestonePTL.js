const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SeaMilestonePTL', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartyName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ShippingLine: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SizeType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    POD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Position: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    INTime: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TerminalTransfer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TerminalTransferIn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TerminalTransferOut: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LoadTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VIRNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Vessel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Voyage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BookingNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ShipperSeal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LineSeal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Standing: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HoldDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReleaseCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TruckInYard: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TruckInTime: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BRNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RateType: {
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
    CarrierBookingNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SeaMilestonePTL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SeaMiles__3214EC0779E04B89",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
