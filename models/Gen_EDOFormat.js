const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDOFormat', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RegionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EDOFormat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EDOSubmissionChennal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDOFormat',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EDoFormat",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
