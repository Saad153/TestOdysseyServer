const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_GRN_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    GRNId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_GRN',
        key: 'Id'
      }
    },
    DEStuffingDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_CargoDEStuffing_Detail',
        key: 'Id'
      }
    },
    ReceivingOrderDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_ReceivingOrder_Detail',
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
    DWareHouseId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
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
    DCustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    SNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DGRNDate: {
      type: DataTypes.DATE,
      allowNull: true
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
    OverRule: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SiteId: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LinkId: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    GRNOrignaldate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ProjectId: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PkgLength: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    PkgHeight: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    PkgWidth: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Weight: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    SystemRemarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_GRN_Detail',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_GRN___3214EC073A3AC7C0",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
