const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DashboardSetup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DashboardPolicyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_DashboardPolicy',
        key: 'Id'
      }
    },
    ElementValue: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DashboardTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_DashboardType',
        key: 'Id'
      }
    },
    EditorTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_EditorType',
        key: 'Id'
      }
    },
    UserId: {
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
    tableName: 'Gen_DashboardSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_DashboardSetup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
