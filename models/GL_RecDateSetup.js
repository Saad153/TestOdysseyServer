const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_RecDateSetup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DateForBPV: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForBRV: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForCN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForCPV: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForDN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForJV: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForCRV: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForPI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForSI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForTV: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateForOP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DaysForBPV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForBRV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForCN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForCPV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForDN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForJV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForCRV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForPI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForSI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForTV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DaysForOP: {
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
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LockedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_RecDateSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__GL_RecDa__3214EC070B5CAFEA",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
