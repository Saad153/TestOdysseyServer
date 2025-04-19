const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Manifests', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner_and_operator: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_of_aircraft: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    point_of_loading: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    flight_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    point_of_unloading: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    companyId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    totalWt: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    totalPcs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    atd: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Manifests',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Manifest__3213E83F95254EB5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
