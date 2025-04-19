const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Region', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RegionName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RegionDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DecimalPortion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsDemurrageApplicable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsViaPortApplicable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Region',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Region",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
