const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Report_Properties', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DataType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FieldName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ReportId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Report',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Report_Properties',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Report_Properties",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
