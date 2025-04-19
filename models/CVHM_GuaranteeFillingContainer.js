const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVHM_GuaranteeFillingContainer', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GuaranteeFillingId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GuaranteeFirstExtentionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GuaranteeSecondExtentionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GuaranteeCancellationId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(11),
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
    FilingCRTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DischargeVesselID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    DischargeVoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    LoadingVesselID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    LoadingVoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ManifestHeaderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ManifestHeader',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'CVHM_GuaranteeFillingContainer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CVHM_GuaranteeFillingContainer",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
