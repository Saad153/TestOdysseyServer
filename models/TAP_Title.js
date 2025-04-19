const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Title', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Titles: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_Title',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAP_Title",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
