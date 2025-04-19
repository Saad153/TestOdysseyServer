const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Salaries_Detail_GL', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SalariesDetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Salaries_Detail',
        key: 'Id'
      }
    },
    GLCOAId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    AllowanceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Allowance',
        key: 'Id'
      }
    },
    DeductionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Deduction',
        key: 'Id'
      }
    },
    AdvanceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_SalaryAdvance',
        key: 'Id'
      }
    },
    LoanScheduleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Loan_Schedule',
        key: 'Id'
      }
    },
    Amount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Salaries_Detail_GL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Sala__3214EC071F1CBD30",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
