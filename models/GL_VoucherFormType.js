const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_VoucherFormType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FormCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormDesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_VoucherFormType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_VoucherFormType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
