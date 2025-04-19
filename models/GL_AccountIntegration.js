const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AccountIntegration', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ApplicableDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    WIPDirect: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    WIPCoload: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    WIPCrossTrade: {
      type: DataTypes.BOOLEAN,
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
    WIPLogistics: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AccountIntegration',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_AccountIntegration",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
