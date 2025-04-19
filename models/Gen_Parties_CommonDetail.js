const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Parties_CommonDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    PickupReadyTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PickupCloseTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PickupRemarks: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    PickupSiteTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PickupNCId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_NonCommercialPickup',
        key: 'Id'
      }
    },
    DeliveryReadyTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeliveryCloseTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeliveryRemarks: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    DeliverySiteTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DeliveryNCId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_NonCommercialDelivery',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PickupAccessorialIds: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DeliveryAccessorialIds: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Parties_CommonDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Parties_CommonDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
