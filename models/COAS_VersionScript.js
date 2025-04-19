const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COAS_VersionScript', {
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
    SQLQuery: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'COAS_VersionScript',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_COAS_VersionScript",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
