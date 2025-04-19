const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTrk_ContainerActivity', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ContainerID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CTrk_Container',
        key: 'Id'
      }
    },
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CTrk_Activity',
        key: 'Id'
      }
    },
    ActivityDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    CorrespondingPort: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    LocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    Remarks: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    IsAutoActivity: {
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
      allowNull: false
    },
    IsOpeningEntry: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CycleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CTrk_ContainerCycle',
        key: 'Id'
      }
    },
    LoadTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContainerStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CTrk_ContainerStatus',
        key: 'Id'
      }
    },
    DEPOCADetailId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerActivity_Detail',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CTrk_ContainerActivity',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_CTrk_ContainerActivity",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
