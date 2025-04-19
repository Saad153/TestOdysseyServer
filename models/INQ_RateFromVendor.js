const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INQ_RateFromVendor', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    InquiryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'INQ_RateInquiry',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VendorLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    ExpirationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CarrierId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    TransitTime: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EstimatedArrival: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RatedTIme: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalRatedTIme: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EstimatedDeparture: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
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
    }
  }, {
    sequelize,
    tableName: 'INQ_RateFromVendor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INQ_RateFromVendor",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
