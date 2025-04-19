const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DashboardSetupPolicy', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SecurityGroupId: {
      type: DataTypes.BIGINT,
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
    SETileBackground: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SITileBackground: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AETileBackground: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AITileBackground: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LGTileBackground: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsSETileHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSITileHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAETileHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAITileHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLGTileHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    RevenueValueHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCashValueHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsBankValueHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsRecvValueHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPaybValueHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsOprMilestoneHide: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDocMilestoneHide: {
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
    IsFinancialValuesVisible: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    RefreshMins: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShowShipmentOrMilestoneFormId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShowLastDueDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShowNextDaysPending: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_DashboardSetupPolicy',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_DashboardSetupPolicy",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
