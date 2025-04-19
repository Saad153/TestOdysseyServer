const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_ReceivingOrder_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReceivingOrderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_ReceivingOrder',
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
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
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
    ShortQty: {
      type: DataTypes.DECIMAL(18,4),
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_ReceivingOrder_Detail',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Rece__3214EC0762E7D798",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
