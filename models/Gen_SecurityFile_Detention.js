const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SecurityFile_Detention', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    Quantity: {
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
    DiscountAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExchRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PickUpDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReturnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DetentionDays: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DetentionRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DetentionAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DetentionDiscount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DetentionLocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OtherAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OtherDiscount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    OtherLocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TotalLocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_SecurityFile_Detention',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SecurityFile_Detention",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
