const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Budget_Detail_MB', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    BudgetDetId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_Budget_Detail',
        key: 'Id'
      }
    },
    MBDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    IsManualMB: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Budget_Detail_MB',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Budget_Detail_MB",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
