const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ports', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    portId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    portName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    portCountry: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    operation: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Ports',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Ports__3213E83F014AA07D",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
