const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_VoucherUsageCode', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UsageCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_VoucherUsageCode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_VoucherUsageCode",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
