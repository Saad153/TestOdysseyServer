const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Dashboard', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExecutionDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FromDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TillDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Dashboard',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Dashboard",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
