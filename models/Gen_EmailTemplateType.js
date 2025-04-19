const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EmailTemplateType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TemplateType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EmailTemplateType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EmailTemplateType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
