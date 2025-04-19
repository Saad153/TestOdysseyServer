const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Dimension', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DimensionCode: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DimensionName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DimentionUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalVolume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    VolumetricWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Dimension',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Dimension",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
