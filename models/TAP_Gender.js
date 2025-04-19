const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Gender', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Gender: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Gender',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAP_Gender",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
