const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_Delivery_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DeliveryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_Delivery',
        key: 'Id'
      }
    },
    DeliveryOrderDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_DeliveryOrder_Detail',
        key: 'Id'
      }
    },
    ItemId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Commodity',
        key: 'Id'
      }
    },
    LocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_Locations',
        key: 'Id'
      }
    },
    ReceivedConditionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'WMS_ReceivedCondition',
        key: 'Id'
      }
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    WareHouseId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    DCustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    GRNDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_GRN_Detail',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PalletNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LotNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Qty: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Weight: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SystemRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OverRule: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DDeliveryNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDeliveryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Project: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_Delivery_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Deli__3214EC0749D2110B",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
