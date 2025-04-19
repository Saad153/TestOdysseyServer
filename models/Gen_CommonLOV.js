const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CommonLOV', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LOVText: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOVTValue: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOVBValue: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LOVNValue: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CommonLOV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CommonLOV",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
