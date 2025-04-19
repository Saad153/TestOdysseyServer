const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_FiscalYear_Quarter', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    FiscalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_FiscalYear',
        key: 'Id'
      }
    },
    FromDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TillDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    QuarterNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_FiscalYear_Quarter',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_FiscalYear_Quarter",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
