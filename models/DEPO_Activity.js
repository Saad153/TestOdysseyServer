const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_Activity', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ActvCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "IX_DEPO_Activity_ActvCode"
    },
    ActvDesc: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "IX_DEPO_Activity_ActvDesc"
    },
    ActvShort: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ActvTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ActivityType',
        key: 'Id'
      }
    },
    ActvStatusId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ActivityStatus',
        key: 'ID'
      }
    },
    ActvStorageId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ActivityStorageType',
        key: 'Id'
      }
    },
    CodecoEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CodecoSMId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EnforceLPBookingNo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSysGen: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SysGenCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_Activity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_Activity_ActvCode",
        unique: true,
        fields: [
          { name: "ActvCode" },
        ]
      },
      {
        name: "IX_DEPO_Activity_ActvDesc",
        unique: true,
        fields: [
          { name: "ActvDesc" },
        ]
      },
      {
        name: "PK_DEPO_Activity",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
