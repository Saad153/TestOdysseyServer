const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDIFormat', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InOutTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsInActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BatchLastNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    FormatFileData: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDIFormat',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EDIFormat",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
