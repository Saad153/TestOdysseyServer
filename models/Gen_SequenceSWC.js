const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SequenceSWC', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SysPolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SysPolicyMaster',
        key: 'Id'
      }
    },
    SubCompID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    SeqDefId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_SequenceDef',
        key: 'Id'
      }
    },
    SequenceCode: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DocPrefix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DocSuffix: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    StartNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NumSeparator: {
      type: DataTypes.STRING(1),
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
    PeriodId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_Periods',
        key: 'Id'
      }
    },
    SeqTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_SequenceSWC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SequenceSWC",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
