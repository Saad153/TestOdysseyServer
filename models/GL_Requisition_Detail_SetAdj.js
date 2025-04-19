const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Requisition_Detail_SetAdj', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SetId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_SettlementInstrument',
        key: 'Id'
      }
    },
    ReqDetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GL_Requisition_Detail',
        key: 'Id'
      }
    },
    ReqAdjDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Requisition_Detail_SetAdj',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Requisition_Detail_SetAdj",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
