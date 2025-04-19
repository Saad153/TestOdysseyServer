const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_JobType', {
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
    tableName: 'Gen_JobType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_JobType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
