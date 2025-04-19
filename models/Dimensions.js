const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Dimensions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    length: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    width: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    height: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qty: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    weight: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BlId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Bls',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Dimensions',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Dimensio__3213E83F847A157C",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
