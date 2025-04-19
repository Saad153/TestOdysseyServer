const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_DeliveryOrder', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    OrderNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
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
    CustomerRefNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InvOrderStatusId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_InvOrderStatus',
        key: 'Id'
      }
    },
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_Activity',
        key: 'Id'
      }
    },
    DeliverSite: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeliverLink: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsVoid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VoidOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VoidReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VoidBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    VoidLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'WMS_DeliveryOrder',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Deli__3214EC076B7D1D99",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
