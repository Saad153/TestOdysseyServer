const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_HistoryType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HistoryType: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_HistoryType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_HistoryType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
