const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SeaExportJob_ReleaseRequest', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReleaseNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ReleaseType: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ReleaseDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    HBLDocumentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OBLDocumentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DeliveryAddress: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MBLDocumentId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DocumentTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    WEBAccountNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsBLDraftConfirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsCourierFeesApplicable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTelexChargesConfirmation: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LocationName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    IsNotifiedAfterPayment: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsOBLReqDestSpecificLoc: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsPayChargesAssociated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsTypeChangeCharges: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
    tableName: 'SExp_SeaExportJob_ReleaseRequest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_SeaExportJob_ReleaseRequest",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
