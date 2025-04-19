const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_Activity', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ActivityNo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    PlanTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsPlanCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PlanId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CRM_Planning',
        key: 'Id'
      }
    },
    SalesmanId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ContactId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Contacts',
        key: 'Id'
      }
    },
    MeetingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MeetingTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsMSOutlookIntegration: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Note: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ActivityTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ActivityDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StageId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ramarks: {
      type: DataTypes.STRING(500),
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CustomerTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CRM_Activity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CRM_Activity",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
