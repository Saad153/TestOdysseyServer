const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobInvoiceOpening_Advance', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    InvOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoiceOpening',
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
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
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
    AdvanceAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SettlementInsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_SettlementInstrument',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_JobInvoiceOpening_Advance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobInvoiceOpening_Advance",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
