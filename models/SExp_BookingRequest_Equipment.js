const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_BookingRequest_Equipment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    BookingRequestId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SExp_BookingRequest',
        key: 'Id'
      }
    },
    SeriallNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    dDGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Quantity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Weight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BuyRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SellRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ISoftEquipSizeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ISoftEquipmentSizeTypeMapping',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'SExp_BookingRequest_Equipment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_BookingRequest_Equipment",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
