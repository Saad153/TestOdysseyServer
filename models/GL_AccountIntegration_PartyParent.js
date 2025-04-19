const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AccountIntegration_PartyParent', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IntegrationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_AccountIntegration',
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
    PartyTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PartySubTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CityCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IntgWizardId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AccountIntegration_PartyParent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AccountIntegration_PartyParent",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
