const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_Planning_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PlanId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'CRM_Planning',
        key: 'Id'
      }
    },
    dSalesmanId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CRM_Planning_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CRM_Planning_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
