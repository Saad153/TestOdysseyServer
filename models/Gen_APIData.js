const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_APIData', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DisplayField: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ValueField: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    KeyField: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdditionalValue: {
      type: DataTypes.STRING(50),
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
    tableName: 'Gen_APIData',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_APIData",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
