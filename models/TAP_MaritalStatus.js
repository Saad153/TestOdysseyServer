const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_MaritalStatus', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaritalStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_MaritalStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAP_MaritalStatus",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
