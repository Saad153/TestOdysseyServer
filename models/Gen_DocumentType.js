const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DocumentType', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_DocumentType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Docu__3214EC072AAB3E11",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
