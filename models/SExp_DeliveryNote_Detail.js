const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_DeliveryNote_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DeliveryNoteId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SExp_DeliveryNote',
        key: 'Id'
      }
    },
    Quantity: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DimensionX: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DimensionY: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DimensionZ: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Weight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SeriallNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GRN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GRNTranNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    GRN_Detail_SNO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_DeliveryNote_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_DeliveryNote_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
