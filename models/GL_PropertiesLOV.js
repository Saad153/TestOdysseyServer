const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_PropertiesLOV', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GLPropertyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Properties',
        key: 'Id'
      }
    },
    Type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOVCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(50),
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
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LockedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_PropertiesLOV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_VoucherPropertiesLOV",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
