const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EmailTemplate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TemplateCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TemplateDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TemplateTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_EmailTemplateType',
        key: 'Id'
      }
    },
    EmailToId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_EmailRecipient',
        key: 'Id'
      }
    },
    EmailToAdditional: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    EmailCCId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_EmailRecipient',
        key: 'Id'
      }
    },
    EmailCCAdditional: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SubjectText: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MessageBodyText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(200),
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
    FormId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    UserId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EmailFrom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AttachFileName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AttachFileExt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    AttachFile: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EmailTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EmailTemplate",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
