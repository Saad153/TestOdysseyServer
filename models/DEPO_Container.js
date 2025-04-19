const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_Container', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ContainerNo: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "IX_DEPO_Container_ContainerNo"
    },
    SizeTypeCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    CurrActvTranNumb: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    InHand: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TranNumbGateIn: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TranNumbGateOut: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SizeChangeLog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ManufacturingDate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DEPO_Container',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_DEPO_Container_ContainerNo",
        unique: true,
        fields: [
          { name: "ContainerNo" },
        ]
      },
      {
        name: "PK_DEPO_Container",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
