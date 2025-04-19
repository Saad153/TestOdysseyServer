const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ActiveInactiveLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Inactive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    FormName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TransId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ReasonId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ActiveInactiveReason',
        key: 'Id'
      }
    },
    ReasonDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ActiveInactiveLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ActiveInactiveLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
