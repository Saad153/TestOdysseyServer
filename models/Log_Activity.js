const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_Activity', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ActivityCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ActivityName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ActivitySpecification: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ActivityTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Log_ActivityType',
        key: 'Id'
      }
    },
    IsInitialActivity: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsEDI: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Border: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsAlert: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AlertDays: {
      type: DataTypes.DECIMAL(9,0),
      allowNull: true
    },
    IsVehicleChangeAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    RouteId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsForReeferCntrs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsForDryCntrs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPickAutoRemarks: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EDIFormat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EDILocCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EDINextLocCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Remarks1: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Remarks2: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Remarks3: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ValidFor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    YardId: {
      type: DataTypes.INTEGER,
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
    }
  }, {
    sequelize,
    tableName: 'Log_Activity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_Activity",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
