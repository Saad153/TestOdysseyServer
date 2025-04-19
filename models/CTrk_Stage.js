const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTrk_Stage', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StageName: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CTrk_Stage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CTrk_Stage",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
