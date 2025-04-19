const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Stamps', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stamps: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stamp_group: {
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
    tableName: 'Stamps',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Stamps__3213E83F26F41F6E",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
