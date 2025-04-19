const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Dashboard_Executive', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DashboardId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Dashboard',
        key: 'Id'
      }
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TypeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Cnt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Teus: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    M3: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    Tons: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    Revenue: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    Cost: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Dashboard_Executive',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Dashboard_Executive",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
