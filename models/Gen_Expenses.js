const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Expenses', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ExpenseDescription: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
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
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LockedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Expenses',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_Expe__3214EC07403A8C7D",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
