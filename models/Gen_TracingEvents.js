const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TracingEvents', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TracingCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TracingHead: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    TracingTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsSeaExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSeaImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWarehouse: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLogistic: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FrequencyId: {
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
    AutoPickId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TracingEventsAutoPick',
        key: 'Id'
      }
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
    EditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NEqualsTo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SysCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsShowOnDashboard: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DashboardColor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TAGCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    InternalExternalId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Sno: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_TracingEvents',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_TracingEvents",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
