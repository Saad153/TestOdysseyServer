const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_Job_Container', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Sno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LogJobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
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
    SealNo2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SealNo3: {
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
    Version: {
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
    dDGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEBLEquipmentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_BL_Equipment',
        key: 'Id'
      }
    },
    SIBLEquipmentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_BL_Equipment',
        key: 'Id'
      }
    },
    GuidId: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log_Job_Container',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_Job_Container",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
