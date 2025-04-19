const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AccountIntegration_Charges_Log', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IntegrationChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IntegrationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    JobSubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_JobSubType',
        key: 'Id'
      }
    },
    AccountTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_AccountType',
        key: 'Id'
      }
    },
    COAId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    IntgWizardId: {
      type: DataTypes.INTEGER,
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
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    JobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_JobType',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_AccountIntegration_Charges_Log',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AccountIntegration_Charges_Log",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
