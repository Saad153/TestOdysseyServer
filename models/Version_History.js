const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Version_History', {
    VersionNo: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false,
      primaryKey: true
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsCritical: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DepBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DepDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DepLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Version_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Version_History_1",
        unique: true,
        fields: [
          { name: "VersionNo" },
        ]
      },
    ]
  });
};
