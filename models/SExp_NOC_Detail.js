const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_NOC_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    NOCId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_NOC',
        key: 'Id'
      }
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_NOC_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SExp_NOC__3214EC0700191323",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
