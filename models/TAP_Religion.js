const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Religion', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Religion: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Religion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAP_Religion",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
