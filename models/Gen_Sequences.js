const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Sequences', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FormName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LastNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsUsed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DocPrefix: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DocSuffix: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    StartNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SysPolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SysPolicyMaster',
        key: 'Id'
      }
    },
    NumSeparator: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SeqDefId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_SequenceDef',
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
    }
  }, {
    sequelize,
    tableName: 'Gen_Sequences',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Sequences",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
