const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sub_Tasks', {
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TaskId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tasks',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Sub_Tasks',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Sub_Task__3213E83FF15245DD",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
