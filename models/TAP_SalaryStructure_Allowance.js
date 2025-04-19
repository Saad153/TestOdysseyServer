const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_SalaryStructure_Allowance', {
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
    AllowanceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Allowance',
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
    tableName: 'TAP_SalaryStructure_Allowance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Sala__3214EC07177B9B68",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
