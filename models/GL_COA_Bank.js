const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COA_Bank', {
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
    BankBranch: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BankAccount: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    LastCheque: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BankPhone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BankFaxNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BankMobile: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BankEmail: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BankAddress: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    BankSwiftCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BankIBANCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COA_Bank',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Pk_GL_COA_Bank",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
