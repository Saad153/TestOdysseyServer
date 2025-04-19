const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_StuffingPlan_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    StuffingPlanId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_StuffingPlan',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    PCS: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GrossWt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SealNo: {
      type: DataTypes.STRING(100),
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
    Remarks: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsEmail: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ManifestCBM: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetWt: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    EMailBody: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LoadTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SalesRepId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'SExp_StuffingPlan_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_StuffingPlan_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
