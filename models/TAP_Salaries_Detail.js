const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Salaries_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SalariesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Salaries',
        key: 'Id'
      }
    },
    EmployeeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    PresentDay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Leave: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Holiday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Absent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Lates: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GrossSalary: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    SalaryStructureId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_SalaryStructure',
        key: 'Id'
      }
    },
    SalaryEarned: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Deduction: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Advance: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Loan: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    NetSalary: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsManual: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Salaries_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Sala__3214EC070468C6F4",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
