const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notifications', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notification: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recordId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    companyId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    opened: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdById: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Notifications',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Notifica__3213E83F9933C403",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
