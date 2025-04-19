const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TerminalInvoiceLog', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TerminalInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TerminalName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ManifestId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Narration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FinalizedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinalizedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinalizedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FinalizedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FinalizedStatus: {
      type: DataTypes.TEXT,
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_TerminalInvoiceLog',
    schema: 'dbo',
    timestamps: false
  });
};
