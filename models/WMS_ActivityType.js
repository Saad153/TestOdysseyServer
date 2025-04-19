const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_ActivityType', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TypeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_ActivityType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Acti__3214EC074EE0DEEB",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
