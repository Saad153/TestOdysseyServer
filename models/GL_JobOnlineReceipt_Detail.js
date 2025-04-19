const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobOnlineReceipt_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobOnlineReceipt',
        key: 'Id'
      }
    },
    JobInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice',
        key: 'Id'
      }
    },
    ReceiptAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobOnlineReceipt_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__GL_JobOn__3214EC077CE6D566",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
