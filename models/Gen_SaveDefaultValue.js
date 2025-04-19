const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SaveDefaultValue', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    FormName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ControlName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ControlValue: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ControlDataType: {
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
    tableName: 'Gen_SaveDefaultValue',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Save__3214EC0776969D2E",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
