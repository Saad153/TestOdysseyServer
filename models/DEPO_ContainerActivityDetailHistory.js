const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ContainerActivityDetailHistory', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CADetailId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CATranId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerActivity',
        key: 'Id'
      }
    },
    ContainerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Container',
        key: 'Id'
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
      allowNull: true
    },
    LocationId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ConditionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerCondition',
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
    OldConditionID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerCondition',
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
      type: DataTypes.DATE,
      allowNull: true
    },
    DTranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DTranNumb: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DCostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
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
    }
  }, {
    sequelize,
    tableName: 'DEPO_ContainerActivityDetailHistory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_ContainerActivityDetailHistory",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
