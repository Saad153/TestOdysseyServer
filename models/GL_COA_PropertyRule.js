const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COA_PropertyRule', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
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
    RuleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COARule',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COA_PropertyRule',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_COA_PropertyRule",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
