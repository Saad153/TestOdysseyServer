const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Forms', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FormName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormTitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FormType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsForAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Forms',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Forms",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
