const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_FrequencyPeriod', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FrequencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Frequency',
        key: 'Id'
      }
    },
    PeriodName: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_FrequencyPeriod',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Freq__3214EC071229A90A",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
