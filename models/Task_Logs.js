const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Task_Logs', {
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
    tableName: 'Task_Logs',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Task_Log__3213E83F02B1F281",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
