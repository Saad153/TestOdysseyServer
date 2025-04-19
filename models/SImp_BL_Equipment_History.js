const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_BL_Equipment_History', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RevisionId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    SIBLEquipId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    SIBLId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SImp_BL',
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
    dSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
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
    dFreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dFreeDaysPlugIn: {
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
    }
  }, {
    sequelize,
    tableName: 'SImp_BL_Equipment_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_BL_Equipment_History",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
