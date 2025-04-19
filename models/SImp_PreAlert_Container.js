const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_PreAlert_Container', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SIPreAlertId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_PreAlert',
        key: 'Id'
      }
    },
    ContainerID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CTrk_Container',
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
    PrincipalID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ContainerNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IsSOCContainer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsFCL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SImp_PreAlert_Container',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_PreAlert_Container",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
