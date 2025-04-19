const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDO_SubmissionDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EDOId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_EDO',
        key: 'Id'
      }
    },
    IsSubmitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsReSubmitted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SubmitStatusBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubmitStatusOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SubmitStatusLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubStatus: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    UploadRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SendingEmails: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDO_SubmissionDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EDO_SubmissionDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
