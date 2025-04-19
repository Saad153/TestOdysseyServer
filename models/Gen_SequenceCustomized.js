const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SequenceCustomized', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
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
    FiscalYearId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_FiscalYear',
        key: 'Id'
      }
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
    IsAutoNumber: {
      type: DataTypes.BOOLEAN,
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
    Padding: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Format: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SequenceCustomized',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SequenceCustomized",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
