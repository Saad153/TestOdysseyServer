const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_SubLine', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SubLineCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SubLineName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "IX_DEPO_SubLines_SubLineName"
    },
    LineId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    Phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(7000),
      allowNull: true
    },
    Web: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Person: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CodecoId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodecoSenderID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsGateInEDIReportToItsLine: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsMnREDIReportToItsLine: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EDIEmail: {
      type: DataTypes.STRING(7000),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'DEPO_SubLine',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_SubLines_SubLineName",
        unique: true,
        fields: [
          { name: "SubLineName" },
        ]
      },
      {
        name: "PK_DEPO_SubLine",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
