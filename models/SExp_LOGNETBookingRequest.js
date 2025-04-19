const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_LOGNETBookingRequest', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    BookingReqId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BRFileName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FileStageId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AmndntOneFileName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AmndntOneDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AmndntOneStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AmndntTwoFileName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AmndntTwoDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AmndntTwoStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShipFileName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ShipDateTime: {
      type: DataTypes.DATE,
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEBLId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    UploadBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UploadOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UploadLog: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TranId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DeliveryConfirmedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeliveryDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_LOGNETBookingRequest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SExp_LOG__3214EC07448E3901",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
