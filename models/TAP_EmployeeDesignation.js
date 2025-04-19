const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_EmployeeDesignation', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ShortCode: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Designation: {
      type: DataTypes.STRING(150),
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
    tableName: 'TAP_EmployeeDesignation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TAP_Empl__3214EC07077A3DC9",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
