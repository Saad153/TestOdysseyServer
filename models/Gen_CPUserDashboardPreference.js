const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CPUserDashboardPreference', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DashboardSetupId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_CPDashboardSetup',
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
    },
    ComponentNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ViewPlace: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JobType: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FilterTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CPUserDashboardPreference',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CPUserDashboardPreference",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
