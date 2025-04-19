const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ContainerActivity_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CAId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerActivity',
        key: 'Id'
      },
      unique: "IX_DEPO_ContainerActivity_Detail_CATran_ContainerId"
    },
    SNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContainerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Container',
        key: 'Id'
      },
      unique: "IX_DEPO_ContainerActivity_Detail_CATran_ContainerId"
    },
    ContainerNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SizeTypeCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    ActivityTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ActivityType',
        key: 'Id'
      }
    },
    CStatusId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerStatus',
        key: 'Id'
      }
    },
    TruckNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ContainerKindId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerKind',
        key: 'Id'
      }
    },
    LocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Location',
        key: 'Id'
      }
    },
    ContainerCondId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CTrk_ContainerStatus',
        key: 'Id'
      }
    },
    GrossWeight: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    Charges: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CheckedBy: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EIRNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EIRRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EDIId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsCodecoProcessed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CNIC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OldContainerCondId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CTrk_ContainerStatus',
        key: 'Id'
      }
    },
    EIRRemarksText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsEIRPrinted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LoadingTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_LoadingType',
        key: 'Id'
      }
    },
    SealNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EIRPreviousRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EIRPreviousRemarksText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StackAreaId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_StackingArea',
        key: 'Id'
      }
    },
    IsDamageDetail: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    GenSetManufacture: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    GenSetModel: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    GenSetManufactureDate: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    GenSetMfgId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ManufactureCoding',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContainerManufactureDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DriverName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    DriverCellNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PreviousRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PartyLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'DEPO_ContainerActivity_Detail',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_ContainerActivity_Detail_CATran_ContainerId",
        unique: true,
        fields: [
          { name: "CAId" },
          { name: "ContainerId" },
        ]
      },
      {
        name: "PK_DEPO_ContainerActivity_Detail_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
