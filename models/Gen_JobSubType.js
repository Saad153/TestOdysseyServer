const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_JobSubType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubTypeName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OperationType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Code: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_JobSubType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_JobSubType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
