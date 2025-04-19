const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_CRO_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CROId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SExp_CRO',
        key: 'Id'
      }
    },
    SeriallNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ContainerNumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ContainerSizeType: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_CRO_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_CRO_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
