const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_PartiesCommitment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    FiscalYearId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_FiscalYear',
        key: 'Id'
      }
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
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
    }
  }, {
    sequelize,
    tableName: 'Gen_PartiesCommitment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_PartiesCommitment",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
