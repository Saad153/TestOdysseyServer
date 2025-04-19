const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vessels', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carrier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    destinations: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Vessels',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Vessels__3213E83F1B5057A5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
