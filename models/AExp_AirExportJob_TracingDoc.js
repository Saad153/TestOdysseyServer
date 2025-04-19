const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AExp_AirExportJob_TracingDoc', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
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
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'AExp_AirExportJob_TracingDoc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AExp_AirExportJob_TracingDoc",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
