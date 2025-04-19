const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SeaExportJob_BLReleaseLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    BLReleaseStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BLHandoverId: {
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LetterProcessedId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_LetterProcessed',
        key: 'Id'
      }
    },
    FromEmail: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ToEmail: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Subject: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmailBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EmailOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RelesaseInstructionDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReleaseOrStop: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_SeaExportJob_BLReleaseLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_SeaExportJob_BLReleseLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
