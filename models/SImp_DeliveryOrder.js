const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_DeliveryOrder', {
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
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
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
    GatePassNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GatePassDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GuaranteeNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GuaranteeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GPBookNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GPValidDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GPCCOne: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GPCCTwo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GatePassRemarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmptyReturnAtId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    ReferenceNum: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NICExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOPrintedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EndorsementInstruction: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SeqNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Suffix: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isSendToClearingAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isSendToConsignee: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isSendToClient: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isSendToCCToAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isSendToCCToMe: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AcknowledgeEmails: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    isAutoUpdateReturnAt: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SImp_DeliveryOrder',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_DeliveryOrder",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
