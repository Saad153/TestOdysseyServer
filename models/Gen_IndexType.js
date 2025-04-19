const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_IndexType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IndexDesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    IndexCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    IndexOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_IndexType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_IndexType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
