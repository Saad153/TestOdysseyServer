const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ISoftCommodityMapping', {
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
    CommodityCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CommodityName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(10),
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
    CSULCommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Commodity',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_ISoftCommodityMapping',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ISoftCommodityMapping",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
