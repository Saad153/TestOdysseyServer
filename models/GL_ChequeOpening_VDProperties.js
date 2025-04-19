const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ChequeOpening_VDProperties', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ChOpeningId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'GL_ChequeOpening',
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
    tableName: 'GL_ChequeOpening_VDProperties',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_ChequeOpening_VDProperties",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
