const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_DeliveryOrder_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DeliveryOrderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_DeliveryOrder',
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
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
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
    OrderQty: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    DeliveryNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LinkIdOrParty: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ProjectOrBUnit: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SubLocation: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SiteIdOrTown: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_DeliveryOrder_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Deli__3214EC07731E3F61",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
