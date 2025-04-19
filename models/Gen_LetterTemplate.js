const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_LetterTemplate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LetterCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    LetterName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LetterRefr: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LetterToId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_EmailRecipient',
        key: 'Id'
      }
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    AttnPers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LetterSubjectj: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LetterDocFile: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
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
    LetterMatter: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TemplateTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AttentionTo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Prefix: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PrefixSeperator: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Number: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SuffixSeperator: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Suffix: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    IsAvailableForManifest: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAvailableForJob: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BasedOnIdString: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GuaranteeTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CVHM_GuaranteeType',
        key: 'Id'
      }
    },
    fileExtention: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    LetterTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ReleaseTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AttentionTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_LetterTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_LetterTemplate",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
