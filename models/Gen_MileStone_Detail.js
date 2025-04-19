const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_MileStone_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sequenceId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MileStoneId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_MileStone',
        key: 'Id'
      }
    },
    MilestoneTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    JobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_JobType',
        key: 'Id'
      }
    },
    SubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DepartmentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Department',
        key: 'Id'
      }
    },
    IsHideTracingClientCopy: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAlwaysUpdateFromConsole: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPaymentAckEvent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TracingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TracingEvents',
        key: 'Id'
      }
    },
    ParentTracingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TracingEvents',
        key: 'Id'
      }
    },
    BasedOnId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TracingEventsAutoPick',
        key: 'Id'
      }
    },
    NEqualsTo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SysCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShowOnDashboard: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DashboardColor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    JobNatureId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LogJobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Log_JobType',
        key: 'Id'
      }
    },
    IncoTermsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_IncoTerms',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_MileStone_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_MileStone_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
