const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SysInfo', {
    DBId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    AppCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ClientId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SysCode: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    SysData: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SysInfo',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_SysInfo",
        unique: true,
        fields: [
          { name: "DBId" },
        ]
      },
    ]
  });
};
