const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Allowance_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AllowanceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Allowance',
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
    tableName: 'TAP_Allowance_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Allo__3214EC075D4EF9D3",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
