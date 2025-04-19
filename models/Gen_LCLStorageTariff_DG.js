const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_LCLStorageTariff_DG', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LCLStorageTariffId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_LCLStorageTariff',
        key: 'Id'
      }
    },
    StartDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EndDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(19,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_LCLStorageTariff_DG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_LCLS__3214EC0764E52EA3",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
