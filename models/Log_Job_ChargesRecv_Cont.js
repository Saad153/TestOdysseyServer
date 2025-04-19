const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_Job_ChargesRecv_Cont', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LGJobChargesRecvId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job_ChargesRecv',
        key: 'Id'
      }
    },
    LGJobContainerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job_Container',
        key: 'Id'
      }
    },
    dLogJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GuidId: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log_Job_ChargesRecv_Cont',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_Job_ChargesRecv_Cont",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
