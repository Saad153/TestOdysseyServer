const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_Activity_PaymentMode', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Activity',
        key: 'ID'
      }
    },
    LineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    PaymentModeId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_Activity_PaymentMode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_Activity_PaymentMode",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
