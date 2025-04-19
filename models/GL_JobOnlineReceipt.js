const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobOnlineReceipt', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReceiptNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ReceiptDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ModeId: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    StatusId: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ReceiptRefNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsFinalized: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    GuidId: {
      type: DataTypes.UUID,
      allowNull: false
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
    InvoiceAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ReceiptAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    JobType: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    FundReceiveStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobOnlineReceipt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__GL_JobOn__3214EC0778222049",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
