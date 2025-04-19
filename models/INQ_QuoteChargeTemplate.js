const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INQ_QuoteChargeTemplate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TemplateName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TransportMode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CargoType: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IncoTerms: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
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
    tableName: 'INQ_QuoteChargeTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INQ_QuoteChargeTemplate",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
