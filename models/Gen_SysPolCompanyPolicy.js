const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SysPolCompanyPolicy', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SysPolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SysPolicyMaster',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      },
      unique: "IX_Gen_SysPolCompanyPolicy"
    },
    ElementId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SysPolElements',
        key: 'Id'
      }
    },
    ElementValue: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SysPolCompanyPolicy',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Gen_SysPolCompanyPolicy",
        unique: true,
        fields: [
          { name: "SubCompanyId" },
        ]
      },
      {
        name: "PK_Gen_SysPolCompanyPolicy",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
