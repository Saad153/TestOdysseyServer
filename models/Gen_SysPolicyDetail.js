const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SysPolicyDetail', {
    Id: {
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
      },
      unique: "IX_Gen_SysPolicyDetail"
    },
    ElementId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SysPolElements',
        key: 'Id'
      },
      unique: "IX_Gen_SysPolicyDetail"
    },
    ElementValue: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ElementCode: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SysPolicyDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Gen_SysPolicyDetail",
        unique: true,
        fields: [
          { name: "ElementId" },
          { name: "SysPolId" },
        ]
      },
      {
        name: "PK_Gen_SysPolicyDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
