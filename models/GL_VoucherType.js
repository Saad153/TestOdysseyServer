const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_VoucherType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TypeCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    VoucherType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SequenceCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_VoucherType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_VoucherType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
