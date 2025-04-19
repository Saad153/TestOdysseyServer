const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Voucher_Detail_Properties', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GVDetailId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher_Detail',
        key: 'Id'
      }
    },
    PropertyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Properties',
        key: 'Id'
      }
    },
    PropertyValueId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    PropertyValueText: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Voucher_Detail_Properties',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Voucher_Detail_Properties",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
