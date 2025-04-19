const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_LetterTemplateTag', {
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
    DataType: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BasedOnIdString: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_LetterTemplateTag',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_LetterTemplateTag",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
