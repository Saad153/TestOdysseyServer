const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ContainerOwner', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Owner: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ContainerOwner',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ContainerOwner",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
