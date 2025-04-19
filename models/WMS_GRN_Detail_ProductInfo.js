const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_GRN_Detail_ProductInfo', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    GRNDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_GRN_Detail',
        key: 'Id'
      }
    },
    Plant: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StorageLocation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Batch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Make: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Model: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PartNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Phase: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RMACounter: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RMANumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TagNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SerialNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MaterialStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserDepartment: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserEmployeeName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserEmployeeNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserDesignation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserDeptt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserLocation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeliveryChallan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GatePassNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EquipmentNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TechnicalInspectionDocNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TechnicalInspectionDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TechnicalInspectionBy: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Accessories: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ItemSpecification: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ConsigmentNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BookingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USMTicketNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Priority: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DisposalCaseNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProductClass: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    WarehouseNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StorageType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StorageBin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StockIndicator: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    StockNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GRDocNoClient: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SubLocation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Stock: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TCSBookingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StockIndicator2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GoodsReceiptDocumente2e: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GoodsReceiptDocumentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Location2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PurchaseNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShipmentNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HandlingUnitNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeliveryNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Project: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_GRN_Detail_ProductInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_GRN___3214EC0746A09EA5",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
