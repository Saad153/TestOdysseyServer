const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTrk_Container', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    YOM: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    WeightLimit: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    isOOG: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OOG_TOP: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OOG_RIGHT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OOG_LEFT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OOG_FRONT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OOG_BACK: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CTrk_Container',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CTrk_Container",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
