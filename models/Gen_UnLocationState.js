const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_UnLocationState', {
    StateCode: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    CountryCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    StateName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_UnLocationState',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_UnLocationState",
        unique: true,
        fields: [
          { name: "StateCode" },
        ]
      },
    ]
  });
};
