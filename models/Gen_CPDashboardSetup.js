const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CPDashboardSetup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ElementName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DisplayName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CountName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ComponentNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DefaultViewPlace: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsClickable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CPDashboardSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_CPDa__3214EC0745EBA637",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
