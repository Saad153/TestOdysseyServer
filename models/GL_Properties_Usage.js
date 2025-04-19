const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Properties_Usage', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GLPropertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GL_Properties',
        key: 'Id'
      }
    },
    UsageCodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GL_VoucherUsageCode',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'GL_Properties_Usage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Properties_Usage",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
