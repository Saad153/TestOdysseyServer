const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_LOGNETPODetails', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Vendor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PONo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Brand: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PODestination: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ItemQSK: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SysQty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BookQty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Variance: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CNTS: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    FOBDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ActualDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PackingUnit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    BookingNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FileTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LOGNETBRId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PODate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VendorAddress: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    BRFileName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SCRNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ItemOrigin: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    BookingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GrossWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_LOGNETPODetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_LOGNETPODetails",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
