const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Vessel', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    VesselCode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    VesselName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Owner: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PrincipleCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CallSign: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    GRT: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NRT: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CountryOfRegistry: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
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
    IMONumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ContainerLastNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Vessel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Vessel",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
