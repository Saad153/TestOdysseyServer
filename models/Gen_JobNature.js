const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_JobNature', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    NatureName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_JobNature',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_JobN__3214EC077F841646",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
