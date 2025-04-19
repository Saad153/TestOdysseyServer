const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_SettlementBalance', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SInsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_SettlementInstrument',
        key: 'Id'
      }
    },
    TransactionAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    SettledAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    BalanceAmount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_SettlementBalance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_SettlementBalance",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
