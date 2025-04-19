const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dec: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Accounts',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Accounts__3213E83F9504A77F",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
