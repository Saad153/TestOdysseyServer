const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_DeliveryNote', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TransTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TransSubType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ControlNumber: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    TransDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    WareHouseLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    Quantity: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Weight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OperationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DestinationCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    Supplier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JobNumber: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TotalPCS: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    IsClosed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_DeliveryNote',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_DeliveryNote",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
