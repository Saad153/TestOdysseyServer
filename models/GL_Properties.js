const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Properties', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Sno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PropertyCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsWithoutLOV: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsNumericData: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSysGen: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Properties',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_VoucherProperties",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
