const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CommodityGroup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CommodityGroupCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CommodityGroupName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CommodityGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CommodityGroup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
