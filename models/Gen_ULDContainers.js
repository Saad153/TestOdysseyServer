const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ULDContainers', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CreateUserId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditUserId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EditTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ULDType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IATACode: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ULDContainers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ULDContainers",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
