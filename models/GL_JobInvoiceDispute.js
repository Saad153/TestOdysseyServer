const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobInvoiceDispute', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice',
        key: 'Id'
      }
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ActualInvAmount: {
      type: DataTypes.DECIMAL(18,9),
      allowNull: true
    },
    SuggestedAmount: {
      type: DataTypes.DECIMAL(18,9),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    AccountsRemarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    IsAcknowledge: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AcnowledgeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ClosingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StopCreditLimitTillDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
    }
  }, {
    sequelize,
    tableName: 'GL_JobInvoiceDispute',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobInvoiceDispute",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
