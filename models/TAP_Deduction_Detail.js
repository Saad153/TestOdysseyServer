const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Deduction_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DeductionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Deduction',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    GLAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Deduction_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Dedu__3214EC0767CC8846",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
