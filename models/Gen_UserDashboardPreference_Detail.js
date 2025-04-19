const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_UserDashboardPreference_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserDashboardPreferanceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_UserDashboardPreference',
        key: 'Id'
      }
    },
    ComponenetNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DashboardSetupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_UserDashboardPreference_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_UserDashboardPreference_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
