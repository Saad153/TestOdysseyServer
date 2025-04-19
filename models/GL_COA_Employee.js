const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COA_Employee', {
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
    EmpCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EmpName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmpFather: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmpAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmpNic: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EmpPhone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EmpSalary: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    EmpAllowance: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    EmpDeduction: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    EmpStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EmpHType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EmpDesignation: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EmpAccount: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    EmpBranch: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CountryCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CityCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    EmpBPay: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    EmpHRent: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    EmpUtility: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    EmpConyence: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    EmpITax: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    EmpSecurity: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COA_Employee',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Pk_GL_COA_Employee",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
