const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SE_Equipments', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    size: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    qty: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gross: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SE_Jobs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'SE_Equipments',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__SE_Equip__3213E83F33AF2032",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
