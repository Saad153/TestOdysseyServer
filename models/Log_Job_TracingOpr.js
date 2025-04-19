const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_Job_TracingOpr', {
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
    SNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TracingEventId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TracingEvents',
        key: 'Id'
      }
    },
    AnticpatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsDone: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ActualDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UpdateBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UpdateOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdateLog: {
      type: DataTypes.STRING(100),
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
    ParentTracingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TracingEvents',
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
    BasedOnId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TracingEventsAutoPick',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Log_Job_TracingOpr',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_Job_TracingOpr",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
