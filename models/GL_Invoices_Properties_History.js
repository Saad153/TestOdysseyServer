const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Invoices_Properties_History', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    InvoiceHistoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Invoices_History',
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
    tableName: 'GL_Invoices_Properties_History',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Invoices_Properties_History",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
