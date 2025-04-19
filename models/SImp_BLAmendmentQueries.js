const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_BLAmendmentQueries', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    VariableName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Query: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SImp_BLAmendmentQueries',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SImp_BLAmendmentQueries",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
