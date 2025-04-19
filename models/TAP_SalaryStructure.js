const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_SalaryStructure', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EffectiveFrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EmployeeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    BasicSalary: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TotalGrossSalary: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TotalDeduction: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    ExpNetSalary: {
      type: DataTypes.DECIMAL(18,2),
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
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_SalaryStructure',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Sala__3214EC077CC7A52C",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
