const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_Job_ChargesRecv_TaxRevShare', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LGJobChargesRecvId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job_ChargesRecv',
        key: 'Id'
      }
    },
    dLogJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    TaxAuthorityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TaxAuthority',
        key: 'Id'
      }
    },
    RevenueSharePercentage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RevenueShareAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsManualTaxApply: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ManualTaxPercentage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ManualTaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log_Job_ChargesRecv_TaxRevShare',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_Job_ChargesRecv_TaxRevShare",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
