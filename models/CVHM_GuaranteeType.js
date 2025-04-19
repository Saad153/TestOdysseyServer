const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVHM_GuaranteeType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TypeDesc: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CVHM_GuaranteeType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CVHM_GuaranteeType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
