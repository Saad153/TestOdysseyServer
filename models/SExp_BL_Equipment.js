const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_BL_Equipment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BL',
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
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    NetWt: {
      type: DataTypes.DECIMAL(18,3),
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
    dSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
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
    dFormENumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dFormEDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TareWt: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    WTUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_BL_Equipment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_BL_Equipment",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
