const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_PEDIFileType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_PEDIFileType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_PEDIFileType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
