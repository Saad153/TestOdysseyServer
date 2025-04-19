const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COA_Company', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CreditLimit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    CreditDays: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PayableCreditLimit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COA_Company',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_COA_Company",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
