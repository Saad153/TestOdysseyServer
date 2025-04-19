const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ISoftEmployeeMapping', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SourceCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EmployeeCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmployeeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CSULEmployeeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    IsSalesMan: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAccountRep: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDocsRep: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'Gen_ISoftEmployeeMapping',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ISoftEmployeeMapping",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
