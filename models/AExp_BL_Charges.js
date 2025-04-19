const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AExp_BL_Charges', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AEBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_BL',
        key: 'Id'
      }
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    Qty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AExp_BL_Charges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AExp_BL_Charges",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
