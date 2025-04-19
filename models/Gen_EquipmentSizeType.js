const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EquipmentSizeType', {
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    EquipSizeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSize',
        key: 'Id'
      }
    },
    EquipTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_EquipmentType',
        key: 'Id'
      }
    },
    Teus: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    EquipNature: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ISOCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    OLDISOCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PerUnitWeight: {
      type: DataTypes.DECIMAL(18,5),
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
    },
    IsSysGenerated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EquipmentSizeType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EquipmentSizeType",
        unique: true,
        fields: [
          { name: "EquipCode" },
        ]
      },
    ]
  });
};
