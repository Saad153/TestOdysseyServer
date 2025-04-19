const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Histories', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    recordId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    updateDate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    html: {
      type: DataTypes.TEXT,
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
    tableName: 'Histories',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Historie__3213E83FF4593A58",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
