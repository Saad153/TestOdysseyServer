const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Voucher_Detail_PaymentChqInfo', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GLVDId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher_Detail',
        key: 'Id'
      }
    },
    BalanceCIHId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_BalanceCIH',
        key: 'Id'
      }
    },
    ChequeAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    ChequeStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_ChequeStatus',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Voucher_Detail_PaymentChqInfo',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Voucher_Detail_PaymentChqInfo",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
