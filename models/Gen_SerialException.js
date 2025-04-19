const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SerialException', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ExceptionName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SerialException',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SerialException",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
