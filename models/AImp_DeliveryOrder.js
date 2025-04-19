const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AImp_DeliveryOrder', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DONumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DODate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ValidDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ClearingAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    DeliveredTo: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    OnAccountOf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LocalCustomId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_LocalCustom',
        key: 'Id'
      }
    },
    DeliveryRequestTo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PrintBy: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PrintOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOReleaseStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NICNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DOName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MobileNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(250),
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
    LineDONo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AImp_DeliveryOrder',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AImp_DeliveryOrder",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
