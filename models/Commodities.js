const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Commodities', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cargoType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    commodityGroup: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isHazmat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    packageGroup: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hazmatCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hazmatClass: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chemicalName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unoCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Commodities',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Commodit__3213E83F2CF17DD2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
