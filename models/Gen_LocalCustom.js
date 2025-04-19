const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_LocalCustom', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LocalCustomCode: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    LocalCustomName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LocalCustomAbbr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EmaliAddress: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    AttentionToDept: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AttentionToCust: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AttentionToTerm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PrincipalCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    DestinationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PaccsPortCode: {
      type: DataTypes.STRING(5),
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
    IsDefaultDiscPort: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDefaultFinalDest: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_LocalCustom',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_LocalCustom",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
