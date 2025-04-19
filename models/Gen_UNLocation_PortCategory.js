const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_UNLocation_PortCategory', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    UNLocCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_PortCategory',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_UNLocation_PortCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_UNLocation_PortCategory",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
