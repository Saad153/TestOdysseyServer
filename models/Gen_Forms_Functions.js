const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Forms_Functions', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    GenFormId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Forms',
        key: 'Id'
      }
    },
    GenFunctionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Functions',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Forms_Functions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Forms_Functions",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
