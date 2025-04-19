const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Companies', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    short: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Companies',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Companie__3213E83F2A368CDC",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
