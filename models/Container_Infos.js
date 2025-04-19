const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Container_Infos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    seal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    size: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rategroup: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gross: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    net: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tare: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wtUnit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cbm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pkgs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    temp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loadType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    detention: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    demurge: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plugin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    top: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    right: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    left: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    front: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    back: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
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
    tableName: 'Container_Infos',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Containe__3213E83FBF901325",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
