const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Parties_CommodityDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Commodity',
        key: 'Id'
      }
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ProductNMFCNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FreightClassTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_FreightClassType',
        key: 'Id'
      }
    },
    ProductNotes: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    NoOfUnits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOfPcs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Weight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Length: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Width: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Height: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    DimensionTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsStackable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    UnitTypeCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ProductPackageType',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Parties_CommodityDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Parties_CommodityDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
