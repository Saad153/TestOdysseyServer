const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SysPolicyDetail_Log', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SysPolDetailId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SysPolId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ElementId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ElementValue: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ElementCode: {
      type: DataTypes.STRING(300),
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
    tableName: 'Gen_SysPolicyDetail_Log',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SysPolicyDetail_Log",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
