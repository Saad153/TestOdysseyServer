const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EmailTemplateTag', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TagName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FieldName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TableName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EmailTemplateTag',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EmailTemplateTag",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
