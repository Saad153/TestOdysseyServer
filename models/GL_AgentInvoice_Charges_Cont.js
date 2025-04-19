const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AgentInvoice_Charges_Cont', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AgentInvoiceChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_AgentInvoice_Charges',
        key: 'Id'
      }
    },
    dSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
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
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
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
    ContainerNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PPCCId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AgentInvoice_Charges_Cont',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AgentInvoice_Charges_Cont",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
