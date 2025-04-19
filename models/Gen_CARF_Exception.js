const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CARF_Exception', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CARFId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_CARF',
        key: 'Id'
      }
    },
    ExceptionTill: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    ExceptionValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExceptionDays: {
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsInActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ExceptionRemarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CARF_Exception',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CARF_Exception",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
