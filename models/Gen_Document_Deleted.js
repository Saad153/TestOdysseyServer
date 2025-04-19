const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Document_Deleted', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    }
  }, {
    sequelize,
    tableName: 'Gen_Document_Deleted',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Document_Deleted",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
