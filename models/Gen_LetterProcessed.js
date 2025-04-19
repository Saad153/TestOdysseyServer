const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_LetterProcessed', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LetterTemplateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_LetterTemplate',
        key: 'Id'
      }
    },
    AttentionTo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RefrNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LetterDate: {
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
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    LetterSubject: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LetterMatter: {
      type: DataTypes.TEXT,
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
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Suffix: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ManifestHeaderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ManifestHeader',
        key: 'Id'
      }
    },
    Field1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Field2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Field3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Field4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Field5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Line1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Line2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Line3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Line4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Line5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ProcessedDocFile: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    TemplateTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
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
    LGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    AIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_AirImportJob',
        key: 'Id'
      }
    },
    AIManifestId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AImp_ManifestHeader',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_LetterProcessed',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_LetterProcessed",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
