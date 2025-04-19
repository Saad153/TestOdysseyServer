const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Document', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DBId: {
      type: DataTypes.UUID,
      allowNull: true
    },
    FormName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormPKId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FileCategory: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InternalExternalId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FileGUId: {
      type: DataTypes.UUID,
      allowNull: true
    },
    FileTitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FileName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FileExt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    StorageTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FileStorageURL: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsDeleted: {
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
    },
    CloudAccessKey: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CloudInfoId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_CloudInfo',
        key: 'Id'
      }
    },
    FileSizeInBytes: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LastAccessDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsForClient: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsForAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DocRefNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    JobInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice',
        key: 'Id'
      }
    },
    AgentInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_AgentInvoice',
        key: 'Id'
      }
    },
    GAMATMSId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TMSLastUpdateOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    JobReceiptId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobReceipt',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_Document',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Document",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
