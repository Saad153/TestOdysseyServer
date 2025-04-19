const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TracingEventOprLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SETracingEventId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SITracingEventId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AETracingEventId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AITracingEventId: {
      type: DataTypes.BIGINT,
      allowNull: true
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
      allowNull: true
    },
    ParentTracingId: {
      type: DataTypes.BIGINT,
      allowNull: true
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
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LogJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LGTracingEventId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_TracingEventOprLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_TracingEventOprLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
