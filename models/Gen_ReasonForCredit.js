const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReasonForCredit', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReasonForCredit: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReasonForCredit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReasonForCredit",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
