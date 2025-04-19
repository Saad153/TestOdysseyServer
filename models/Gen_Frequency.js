const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Frequency', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FrequencyName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    MonthNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Frequency',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Freq__3214EC076C390A4C",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
