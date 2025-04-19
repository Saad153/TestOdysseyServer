const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Job_notes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    recordId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    editBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    opened: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SE_Jobs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Job_notes',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Job_note__3213E83F553E2EB4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
