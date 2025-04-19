const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_EmployeeStatus', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TAP_EmployeeStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAP_EmployeeStatus",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
