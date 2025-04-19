const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ISoftEquipmentSizeTypeMapping', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SourceCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EquipSizeCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EquipSizeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CSULEquipSizeCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
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
    tableName: 'Gen_ISoftEquipmentSizeTypeMapping',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ISoftEquipmentSizeTypeMapping",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
