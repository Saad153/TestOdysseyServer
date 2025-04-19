const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tasks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    priority: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    due: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    requestedBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignedBy: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'Tasks',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Tasks__3213E83F02F91552",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
