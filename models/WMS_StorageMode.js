const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_StorageMode', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StorageMode: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_StorageMode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Stor__3214EC0723576268",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
