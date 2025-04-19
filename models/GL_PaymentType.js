const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_PaymentType', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COASubCategory',
        key: 'Id'
      }
    },
    RequisitionPolicy: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CashExemption: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    BankExemption: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_PaymentType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_PaymentType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
