const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Nationality', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nationality: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Nationality',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAP_Nationality",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
