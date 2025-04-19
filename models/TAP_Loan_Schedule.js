const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Loan_Schedule', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LoanId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Loan',
        key: 'Id'
      }
    },
    ScheduleDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsDeducted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Loan_Schedule',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Loan__3214EC0778F71448",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
