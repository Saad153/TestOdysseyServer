const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Report_Cubical', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RCName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CubicalProperties: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReportTitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ReportType: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Report_Cubical',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Report_Cubical",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
