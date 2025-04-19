const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_LoanRecovery', {
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
    RecoveryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAP_RecoveryType',
        key: 'Id'
      }
    },
    RecoveryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RecoveryAmount: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_LoanRecovery',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Loan__3214EC070FDA79A0",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
