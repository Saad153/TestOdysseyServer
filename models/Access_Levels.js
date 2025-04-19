const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Access_Levels', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    access_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    EmployeeId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Access_Levels',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Access_L__3213E83FA30FE57A",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
