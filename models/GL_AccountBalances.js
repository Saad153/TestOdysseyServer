const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AccountBalances', {
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
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    OpeningAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    DebitAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    CreditAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    BalanceAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    BalDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AccountBalances',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AccountBalances",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
