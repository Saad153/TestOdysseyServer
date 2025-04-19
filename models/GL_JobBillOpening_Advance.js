const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobBillOpening_Advance', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    BillOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobBillOpening',
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
    tableName: 'GL_JobBillOpening_Advance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobBillOpening_Advance",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
