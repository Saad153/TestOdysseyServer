const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TPGL_Terms', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TermCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TermName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DueDay: {
      type: DataTypes.DECIMAL(18,0),
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
    TermType: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TPGL_Terms',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TPGL_Ter__3214EC0762F2C490",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
