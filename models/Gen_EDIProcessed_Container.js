const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDIProcessed_Container', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EDIProcessId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_EDIProcessed',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ContainerNumb: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ediSealNumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SealNumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ediContainerSizeType: {
      type: DataTypes.STRING(10),
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
    GrossWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TareWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CBM: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NoOfPackages: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ediPackagesUnit: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PackagesUnit: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CheckDig: {
      type: DataTypes.DECIMAL(18,5),
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
    ediPrincipalName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    LoadTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dDGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Temperature: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsPartFCL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSOC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsManualFreeDays: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dFreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dFreeDaysDemurrage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dFreeDaysPlugIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDIProcessed_Container',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EDIProcessed_Container",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
