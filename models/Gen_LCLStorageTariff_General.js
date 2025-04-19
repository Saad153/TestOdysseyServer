const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_LCLStorageTariff_General', {
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
    tableName: 'Gen_LCLStorageTariff_General',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_LCLS__3214EC0760207986",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
