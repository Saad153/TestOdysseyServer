const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_ShippingInstruction_Equipment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SESInsId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_ShippingInstruction',
        key: 'Id'
      }
    },
    Sno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(15),
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
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SealNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GrossWt: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    NetWt: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    CBM: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    NoOfPackages: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'UNPacking',
        key: 'PackCode'
      }
    },
    Remarks: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    Temperature: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    dSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_ShippingInstruction_Equipment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_ShippingInstruction_Equipment",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
