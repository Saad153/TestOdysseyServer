const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Periods', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DateFrom: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateTill: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DocPrefix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_CommonStatus',
        key: 'Id'
      }
    },
    FiscalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_FiscalYear',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_Periods',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Periods",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
