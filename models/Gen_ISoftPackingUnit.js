const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ISoftPackingUnit', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ISoftPackingId: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PackingName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CSULPackCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    SourceId: {
      type: DataTypes.INTEGER,
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
    tableName: 'Gen_ISoftPackingUnit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ISoftPackingUnit",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
