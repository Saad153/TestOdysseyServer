const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_BLTemplate_AttachSheets', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    BLTemplateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_BLTemplate',
        key: 'Id'
      }
    },
    Sno: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_BLTemplate_AttachSheets',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_BLTemplate_AttachSheets",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
