const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COAS_VersionScriptLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VersionNo: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    LogDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'COAS_VersionScriptLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_COAS_VersionScriptLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
