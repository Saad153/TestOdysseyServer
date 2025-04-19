const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SIJobNotes', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    NotesTitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NotesDetail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NotesDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    PriorityId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsAttended: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DBId: {
      type: DataTypes.UUID,
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
    DepartmentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Department',
        key: 'Id'
      }
    },
    InternalExternalId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SIJobNotes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SIJobNotes",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
