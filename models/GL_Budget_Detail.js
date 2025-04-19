const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Budget_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    COAAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    BudgetId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_Budget',
        key: 'Id'
      }
    },
    Particular: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    YearlyAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    QuartlyAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MontlyAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsManual: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EnforcementId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Budget_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Budget_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
