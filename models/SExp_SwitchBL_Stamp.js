const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SwitchBL_Stamp', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SESwBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SwitchBL',
        key: 'Id'
      }
    },
    StampId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Stamps',
        key: 'Id'
      }
    },
    Remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StampGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_SwitchBL_Stamp',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_SwitchBL_Stamp",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
