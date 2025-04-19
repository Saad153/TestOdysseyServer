const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_UnAccruedEquipmentInvoice_DaysBreakup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    UnAccruedEquipmentInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_UnAccruedEquipmentInvoice',
        key: 'Id'
      }
    },
    FromDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TillDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Days: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DetentionTariffDetentionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_UnAccruedEquipmentInvoice_DaysBreakup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_UnAccruedEquipmentInvoice_DaysBreakup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
