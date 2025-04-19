const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_Requisition_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReqId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Requisition',
        key: 'Id'
      }
    },
    COAAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    DebitLC: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    CreditLC: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    DebitVC: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    CreditVC: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    NarrationRD: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_Requisition_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_Requisition_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
