const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INQ_RateRequestToVendor', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SubCompanyId: {
      type: DataTypes.STRING(100),
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
    VendorEmail: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    RequestedTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsRejected: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INQ_RateRequestToVendor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INQ_RateRequestToVendor",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
