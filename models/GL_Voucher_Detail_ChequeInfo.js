const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Voucher_Detail_ChequeInfo', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GvDetId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher_Detail',
        key: 'Id'
      }
    },
    SNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChequeNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DrawnBankId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    ChequeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PartyId: {
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
    tableName: 'GL_Voucher_Detail_ChequeInfo',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Voucher_Detail_ChequeInfo",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
