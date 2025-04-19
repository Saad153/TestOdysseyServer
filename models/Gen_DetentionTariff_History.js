const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DetentionTariff_History', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RevisionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DetentionTariffId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    HistoryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TariffCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ApplicableDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ClientId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobSubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    POLCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PODCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PrincipalCommPerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ApprovedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApprovedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApprovedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
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
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_DetentionTariff_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_DetentionTariff_History",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
