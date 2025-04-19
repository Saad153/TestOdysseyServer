const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_SalaryStructure_Deduction', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SalaryStructureId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_SalaryStructure',
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
    BaseOn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Percentage: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_SalaryStructure_Deduction',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Sala__3214EC0713AB0A84",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
