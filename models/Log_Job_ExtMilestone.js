const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_Job_ExtMilestone', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LogJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OperationalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OperationalMilestone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Latitude: {
      type: DataTypes.DECIMAL(18,15),
      allowNull: true
    },
    Longitude: {
      type: DataTypes.DECIMAL(18,15),
      allowNull: true
    },
    LocationCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ContainerNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MblNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CarrierBookingNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SCACCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Vessel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VoyageNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OperationalMilestoneCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SIBookingRequestId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ActualETA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ActualETD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    POD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    POFD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    POL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    POR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PlannedETA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PlannedETD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FileName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PodEta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PorEtd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SizeTypeCode: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    SizeTypeIso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log_Job_ExtMilestone',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_Job_ExtMilestone",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
