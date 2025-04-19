const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Clauses', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ClauseName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    JobType: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DefaultApplicable: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.TINYINT,
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
    tableName: 'Gen_Clauses',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Clauses",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
