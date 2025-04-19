const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Voyages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pol: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pod: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    voyage: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    importOriginSailDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    importArrivalDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    exportSailDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    destinationEta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cutOffDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cutOffTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VesselId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vessels',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Voyages',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Voyages__3213E83FB5FBF81C",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
