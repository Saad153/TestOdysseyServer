const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EPAS_SerialType', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SerialCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SerialName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EPAS_SerialType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_EPAS__3214EC0705120713",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
