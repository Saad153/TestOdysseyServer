const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ContainerDepot', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DepotCode: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    DepotName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    StevedoreId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    AttentionTo: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    UNLocCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    UNLocCodeCity: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CODECOEDIText: {
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
    tableName: 'Gen_ContainerDepot',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ContainerDepot",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
