const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_EmployeeAttendance', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EmployeeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    AttendanceDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OutTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsLate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsHalfDay: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsED: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAbs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsHoliday: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLeave: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(250),
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
    tableName: 'TAP_EmployeeAttendance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Empl__3214EC0775268364",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
