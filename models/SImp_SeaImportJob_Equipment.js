const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_SeaImportJob_Equipment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
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
    Quantity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    PerUnitWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dPrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    dDGNonDGId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SImp_SeaImportJob_Equipment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_SeaImportJob_Equipment",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
