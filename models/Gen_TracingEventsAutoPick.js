const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_TracingEventsAutoPick', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AutoPickName: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_TracingEventsAutoPick',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_TracingEventsAutoPick",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
