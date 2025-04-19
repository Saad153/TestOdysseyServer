const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_RateApply', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    WMSRateApplyOn: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMS_RateApply',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Rate__3214EC074B6553C2",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
