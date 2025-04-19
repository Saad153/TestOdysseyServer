const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INQ_RateToCustomer', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    InquiryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'INQ_RateInquiry',
        key: 'Id'
      }
    },
    VendorLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    RFVendorId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExpirationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(2000),
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
      type: DataTypes.TEXT,
      allowNull: true
    },
    EstimatedArrival: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EstimatedDeparture: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    QuoteNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    InProcess: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PublicUrl: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    PublicUrlFileId: {
      type: DataTypes.STRING(2000),
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
    tableName: 'INQ_RateToCustomer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INQ_RateToCustomer",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
