const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_DashboardPolicy', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PolicyName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DashboardTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_DashboardType',
        key: 'Id'
      }
    },
    EditorTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_EditorType',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_DashboardPolicy',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_DashboardPolicy",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
