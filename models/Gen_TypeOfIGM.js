const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TypeOfIGM', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TypeName: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_TypeOfIGM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_TypeOfIGM",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
