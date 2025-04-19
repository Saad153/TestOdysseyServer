const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_BL_Equipment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SIBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_BL',
        key: 'Id'
      }
    },
    dSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    Sno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SealNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GrossWt: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    NetWt: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    CBM: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    NoOfPackages: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    Remarks: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Temperature: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    LoadTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    dFreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dFreeDaysPlugIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dDGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsSOCContainer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPartFCL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dFreeDaysDemurrage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsGatePassIssued: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EmptyReturnAtId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    PFWReferenceDetention: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PFWReferenceDemurrage: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PFWReferencePlugIn: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SIPreAlertContainerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_PreAlert_Container',
        key: 'Id'
      }
    },
    isOOG: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OOG_TOP: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OOG_RIGHT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OOG_LEFT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OOG_FRONT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OOG_BACK: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    MasterBLEquipmentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsManualFreeDays: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TareWt: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    WTUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OwnerNTNNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsCarrierOwnContainer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SImp_BL_Equipment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_BL_Equipment",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
