const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_WTHDeposit_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    WHTDepositId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_WTHDeposit',
        key: 'Id'
      }
    },
    VoucherNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PmtDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Vendor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PayableAmt: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TaxDeducted: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TaxPercentage: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    PaidAmt: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    PmtNature: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GLVoucherDetailId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher_Detail',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_WTHDeposit_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_WTHDeposit_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
