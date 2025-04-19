const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ISoftVesselMapping', {
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
    VesselCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    VesselName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Owner: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsInActive: {
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
    },
    CSULVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_ISoftVesselMapping',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ISoftVesselMapping",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
