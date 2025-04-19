const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_BLTemplate', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    FormatName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BlankPagePath: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    PrePrintedPath: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    BlankPageFile: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    PrePrintedFile: {
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
    LinesPerPageForMarksNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CharPerPageForMarksNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LinesPerPageForDescription: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CharPerPageForDescription: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LinesPerPageForPackages: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CharPerPageForPackages: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LinesPerPageForContainerData: {
      type: DataTypes.INTEGER,
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
    BLNatureId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Prefix: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Format: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LastNumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Padding: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsAutoNumber: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SignatureImage: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    IsAllowedManualEditing: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_BLTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_BLTemplate",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
