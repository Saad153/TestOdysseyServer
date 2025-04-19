const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ChargesReportingGroup', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReportingGroup: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ChargesReportingGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ChargesReportingGroup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
