const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TaxAuthorityGroup_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TaxAuthorityGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_TaxAuthorityGroup',
        key: 'Id'
      }
    },
    InvoicePrefix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InvoiceSuffix: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PrefixSeparator: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    StartNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LastNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    FiscalYearId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_FiscalYear',
        key: 'Id'
      }
    },
    IsManual: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_TaxAuthorityGroup_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_TaxAuthorityGroup_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
