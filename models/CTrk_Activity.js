const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTrk_Activity', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ActivityCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ActivityDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StockingDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    StorageTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ActivityModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsStartOfCycle: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsEndOfCycle: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsStartOfImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsEndOfImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsStartOfExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsEndOfExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsStartOfSTRMNR: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsEndOfSTRMNR: {
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
    SysActivityCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    IsSysActivity: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ActivityTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CTrk_Activity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CTrk_Activity",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
