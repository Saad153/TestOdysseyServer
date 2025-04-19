const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INQ_RateInquiry_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    RateInquiryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'INQ_RateInquiry',
        key: 'Id'
      }
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AirContainerTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ULDContainers',
        key: 'Id'
      }
    },
    SeaSizeTypeId: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    GrossWeight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    UnitOfMeasurement: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LoadingRate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    DischargeRate: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    PackageType: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    Length: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Width: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Height: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsStackable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BulkCargoTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(20,5),
      allowNull: true
    },
    ChargeableWeight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    FreightClass: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EquipmentId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EquipmentName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UnitType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INQ_RateInquiry_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INQ_RateInquiryDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
